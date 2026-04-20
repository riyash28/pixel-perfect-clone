import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/blog/blog-hero.jpg";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(blogPosts.map(() => false));

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll("[data-card-index]");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.cardIndex);
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO BANNER — full-width image with overlay content */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Ayurvedic herbs and natural wellness ingredients"
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20 md:from-background/90 md:via-background/50 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-20 sm:px-6 md:min-h-[620px] md:py-28 lg:min-h-[680px]">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-4 py-1.5 font-body text-xs font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Our Blog
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Insights for{" "}
              <span className="italic text-primary">Natural Wellness</span>
            </h1>
            <p className="mt-5 max-w-xl font-body text-base text-foreground/80 sm:text-lg">
              Explore expert tips, Ayurvedic wisdom, and healthy living guides
              crafted to help you live a more balanced, vibrant life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-primary font-body font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
                onClick={() =>
                  cardsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 font-body text-sm text-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Updated weekly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                Latest Articles
              </h2>
              <p className="mt-2 font-body text-muted-foreground">
                Stories, science, and rituals from the world of holistic health.
              </p>
            </div>
            <span className="font-body text-sm text-muted-foreground">
              Showing {blogPosts.length} articles
            </span>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3"
          >
            {blogPosts.map((post, idx) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                data-card-index={idx}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className={`group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${
                  visible[idx]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 font-body text-xs font-medium text-primary backdrop-blur-sm">
                    {post.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                    {post.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>Posted by {post.author}</span>
                  </div>

                  <p className="mt-4 line-clamp-3 font-body text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <span className="mt-auto pt-5 text-left font-body text-sm font-semibold text-primary inline-flex items-center gap-1 transition-colors group-hover:text-accent">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
