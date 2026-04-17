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

    // ============ 3D PERSPECTIVE GRID FLOOR (faint) ============
    const grid = new THREE.GridHelper(80, 80, 0xcccccc, 0xdddddd);
    const setGridOpacity = (g: THREE.GridHelper, op: number) => {
      const m = g.material as THREE.LineBasicMaterial | THREE.LineBasicMaterial[];
      if (Array.isArray(m)) m.forEach((x) => { x.transparent = true; x.opacity = op; });
      else { m.transparent = true; m.opacity = op; }
    };
    setGridOpacity(grid, 0.25);
    grid.position.y = -1.6;
    scene.add(grid);

    scene.fog = new THREE.Fog(0xffffff, 5, 22);

    // ============ DENSE RED PARTICLE CLOUD ============
    const PARTICLE_COUNT = 6000;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const seeds = new Float32Array(PARTICLE_COUNT * 3);
    const speeds = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const layer = Math.random();
      // concentrated vertical column in center
      const r = Math.pow(Math.random(), 1.6) * 1.6; // bias toward center
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3 + 0] = Math.cos(angle) * r;
      positions[i * 3 + 1] = Math.random() * 8 - 2.5;
      positions[i * 3 + 2] = Math.sin(angle) * r * 0.7 - layer * 0.3;

      seeds[i * 3 + 0] = Math.random() * 1000;
      seeds[i * 3 + 1] = Math.random() * 1000;
      seeds[i * 3 + 2] = layer;

      speeds[i] = 0.3 + Math.random() * 1.0;
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

        float t = uTime * aSpeed * 0.35;
        pos.y = mod(pos.y + t + 4.0, 10.0) - 4.0;

        float nx = noise(vec2(aSeed.x * 0.02, uTime * 0.3 + aSeed.y * 0.02)) - 0.5;
        float nz = noise(vec2(aSeed.y * 0.02, uTime * 0.25 + aSeed.x * 0.02)) - 0.5;
        pos.x += nx * 0.5;
        pos.z += nz * 0.4;

        // mouse repulsion
        vec2 toMouse = pos.xy - uMouse * 1.5;
        float d = length(toMouse);
        float push = smoothstep(1.2, 0.0, d) * 0.2;
        pos.xy += normalize(toMouse + 0.0001) * push;

        // parallax by depth
        pos.x += uMouse.x * (0.25 - vLayer * 0.2);
        pos.y += uMouse.y * (0.25 - vLayer * 0.2);

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;

        float baseSize = mix(1.2, 3.5, vLayer);
        gl_PointSize = baseSize * (260.0 / -mv.z);

        float fade = 0.6 + 0.4 * sin(uTime * 0.5 + aSeed.x);
        vAlpha = mix(0.4, 1.0, vLayer) * fade;
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
        float core = smoothstep(0.5, 0.0, dist);
        // pure red on white
        vec3 color = vec3(0.92, 0.08, 0.12);
        float alpha = core * vAlpha * mix(0.5, 1.0, vLayer);
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
      // NormalBlending so red stays red on white (additive would wash out)
      blending: THREE.NormalBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

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

    const clock = new THREE.Clock();
    let frameId = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.05;
      material.uniforms.uTime.value = t;
      material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
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
      style={{ background: "#ffffff" }}
    />
  );
};

export default GlobalBackground;
