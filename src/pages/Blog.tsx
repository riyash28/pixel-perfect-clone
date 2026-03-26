import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    title: "Real Stories of Motherhood - Narie Fertility Formula Reviews",
    excerpt: "Parenthood can be challenging, and we at ZeroHarm Sciences understand that. Zeroharm Narie Fertility Formula reviews show real success...",
    date: "Mar 15, 2026",
  },
  {
    title: "Fat Burner Tablets Explained: Benefits & Usage Tips",
    excerpt: "Looking to boost your weight loss journey and tackle stubborn fat? Fat burner tablets can help by enhancing metabolism...",
    date: "Mar 10, 2026",
  },
  {
    title: "How to Clean Your Lungs After Smoking",
    excerpt: "Did you know your lungs begin repairing themselves immediately after you quit smoking? Taking proactive steps helps...",
    date: "Mar 5, 2026",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-display text-4xl font-bold text-foreground">Featured News & Blogs</h1>
          <div className="mt-10 flex flex-col gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
                <p className="font-body text-xs text-muted-foreground">{post.date}</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-foreground">{post.title}</h2>
                <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <button className="mt-4 font-body text-sm font-semibold text-primary hover:underline">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
