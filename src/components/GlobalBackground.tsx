import { useEffect, useRef } from "react";
import * as THREE from "three";

const GlobalBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.2, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ============ 3D GRID FLOOR ============
    const gridSize = 60;
    const gridDivisions = 60;
    const grid = new THREE.GridHelper(gridSize, gridDivisions, 0xff3344, 0xffaaaa);
    const gridMat = grid.material as THREE.LineBasicMaterial | THREE.LineBasicMaterial[];
    if (Array.isArray(gridMat)) {
      gridMat.forEach((m) => {
        m.transparent = true;
        m.opacity = 0.18;
      });
    } else {
      gridMat.transparent = true;
      gridMat.opacity = 0.18;
    }
    grid.position.y = -1.5;
    scene.add(grid);

    // Fade grid into horizon using fog
    scene.fog = new THREE.Fog(0xffffff, 6, 22);

    // ============ PARTICLES ============
    const PARTICLE_COUNT = 280;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const seeds = new Float32Array(PARTICLE_COUNT * 3); // ox, oy, depthLayer
    const speeds = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const layer = Math.random(); // 0..1 (0 = far/background, 1 = near/foreground)
      const spread = 0.6 + layer * 1.4;
      positions[i * 3 + 0] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = Math.random() * 8 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.2 - layer * 0.5;

      seeds[i * 3 + 0] = Math.random() * 1000;
      seeds[i * 3 + 1] = Math.random() * 1000;
      seeds[i * 3 + 2] = layer;

      speeds[i] = 0.4 + Math.random() * 0.9;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 3));
    geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));

    const vertexShader = /* glsl */ `
      attribute vec3 aSeed;
      attribute float aSpeed;
      uniform float uTime;
      uniform vec2 uMouse;
      varying float vLayer;
      varying float vAlpha;

      // simple hash noise
      float hash(float n) { return fract(sin(n) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p); vec2 f = fract(p);
        float a = hash(i.x + i.y * 57.0);
        float b = hash(i.x + 1.0 + i.y * 57.0);
        float c = hash(i.x + (i.y + 1.0) * 57.0);
        float d = hash(i.x + 1.0 + (i.y + 1.0) * 57.0);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vLayer = aSeed.z;
        vec3 pos = position;

        // upward motion, looping
        float t = uTime * aSpeed * 0.35;
        pos.y = mod(pos.y + t + 4.0, 10.0) - 4.0;

        // organic noise drift
        float nx = noise(vec2(aSeed.x * 0.01, uTime * 0.3 + aSeed.y * 0.01)) - 0.5;
        float nz = noise(vec2(aSeed.y * 0.01, uTime * 0.25 + aSeed.x * 0.01)) - 0.5;
        pos.x += nx * 0.6;
        pos.z += nz * 0.4;

        // gentle mouse repulsion (parallax)
        vec2 toMouse = pos.xy - uMouse * 1.5;
        float d = length(toMouse);
        float push = smoothstep(1.5, 0.0, d) * 0.25;
        pos.xy += normalize(toMouse + 0.0001) * push;

        // parallax based on depth layer
        pos.x += uMouse.x * (0.3 - vLayer * 0.25);
        pos.y += uMouse.y * (0.3 - vLayer * 0.25);

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;

        // size: foreground bigger, background smaller
        float baseSize = mix(2.0, 9.0, vLayer);
        gl_PointSize = baseSize * (300.0 / -mv.z);

        // fade in/out subtly with time
        float fade = 0.5 + 0.5 * sin(uTime * 0.6 + aSeed.x);
        vAlpha = mix(0.25, 1.0, vLayer) * (0.6 + 0.4 * fade);
      }
    `;

    const fragmentShader = /* glsl */ `
      precision mediump float;
      varying float vLayer;
      varying float vAlpha;

      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float dist = length(uv);
        if (dist > 0.5) discard;

        // soft glow falloff
        float core = smoothstep(0.5, 0.0, dist);
        float glow = pow(core, 2.0);

        // red color with slight orange core
        vec3 color = mix(vec3(1.0, 0.15, 0.2), vec3(1.0, 0.55, 0.4), glow);

        // background layer = blurred/faint
        float layerAlpha = mix(0.35, 1.0, vLayer);
        float alpha = glow * vAlpha * layerAlpha;

        gl_FragColor = vec4(color, alpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ============ EVENTS ============
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.ty = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("resize", handleResize);

    // ============ ANIMATE ============
    const clock = new THREE.Clock();
    let frameId = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      // smooth mouse
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.05;

      material.uniforms.uTime.value = t;
      material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      // subtle camera parallax
      camera.position.x = mouseRef.current.x * 0.3;
      camera.position.y = 1.2 + mouseRef.current.y * 0.2;
      camera.lookAt(0, 1, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ background: "hsl(var(--background))" }}
    />
  );
};

export default GlobalBackground;
