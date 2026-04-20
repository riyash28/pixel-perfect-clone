import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Twitter,
  User,
} from "lucide-react";
import { blogPosts, getBlogBySlug } from "@/data/blogPosts";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const { prev, next } = useMemo(() => {
    if (!post) return { prev: undefined, next: undefined };
    const idx = blogPosts.findIndex((p) => p.slug === post.slug);
    return {
      prev: idx > 0 ? blogPosts[idx - 1] : undefined,
      next: idx < blogPosts.length - 1 ? blogPosts[idx + 1] : undefined,
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="mx-auto max-w-3xl px-4 py-32 text-center">
          <h1 className="font-display text-3xl font-semibold text-foreground">
            Blog post not found
          </h1>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 font-body text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : `https://praanroot.com/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = [
    {
      label: "Share",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "Tweet",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`,
    },
    {
      label: "Share",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Telegram",
      icon: Send,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${shareText}`,
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${shareText}%20${encodedUrl}`,
    },
    {
      label: "Email",
      icon: Mail,
      href: `mailto:?subject=${shareText}&body=${encodedUrl}`,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Comment submitted",
      description: "Thank you! Your comment will appear after moderation.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="mx-auto max-w-4xl px-4 pb-16 pt-10 sm:px-6 md:pt-16">
        {/* Title block */}
        <header className="animate-fade-up">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">
            {post.tag}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" /> Posted by {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="h-4 w-4" /> {post.comments} Comments
            </span>
          </div>
        </header>

        {/* Featured image */}
        <div
          className="mt-8 overflow-hidden rounded-2xl shadow-md"
          style={{ animation: "fade-in 0.7s ease-out" }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-auto w-full animate-scale-in object-cover"
          />
        </div>

        {/* Intro */}
        <p className="mt-8 font-body text-base leading-relaxed text-foreground/85 sm:text-lg">
          {post.intro}
        </p>

        {/* Sections */}
        <div className="mt-6 space-y-8">
          {post.sections.map((section, i) => (
            <section
              key={section.heading}
              className="animate-fade-up border-t border-border/60 pt-8"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h2 className="flex items-start gap-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                <span className="text-accent">⭐</span>
                <span>{section.heading}</span>
              </h2>
              <p className="mt-3 whitespace-pre-line font-body text-base leading-relaxed text-foreground/80">
                {section.body}
              </p>
              {section.bullets && (
                <ul className="ml-6 mt-3 list-disc space-y-1 font-body text-foreground/80">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Social share */}
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/60 pt-6">
          {shareLinks.map(({ label, icon: Icon, href }, i) => (
            <a
              key={`${label}-${i}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>

        {/* Prev / Next */}
        <div className="mt-10 flex items-center justify-between">
          {prev ? (
            <Link
              to={`/blog/${prev.slug}`}
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Previous
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/blog/${next.slug}`}
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:underline"
            >
              Next <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* Comment form */}
        <div className="mt-12 rounded-2xl bg-muted/40 p-6 ring-1 ring-border/60 sm:p-8">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
            Leave a Comment
          </h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <Label htmlFor="name" className="font-body text-sm text-foreground">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                required
                className="mt-2 rounded-md border-border bg-background"
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-body text-sm text-foreground">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 rounded-md border-border bg-background"
              />
            </div>
            <div>
              <Label htmlFor="message" className="font-body text-sm text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 rounded-md border-border bg-background"
              />
            </div>
            <Button
              type="submit"
              className="rounded-md bg-accent font-body text-xs font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90"
              size="lg"
            >
              Post Comment
            </Button>
          </form>
        </div>

        {/* Back to blogs */}
        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => navigate("/blog")}
            className="rounded-md bg-accent font-body text-xs font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
          </Button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
