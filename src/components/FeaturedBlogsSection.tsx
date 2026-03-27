import { Link } from "react-router-dom";
import blogMotherhood from "@/assets/blog/blog-motherhood.jpg";
import blogFatburner from "@/assets/blog/blog-fatburner.jpg";
import blogLungs from "@/assets/blog/blog-lungs.jpg";

const blogPosts = [
  {
    title: "Real Stories of Motherhood – Narie Fertility Formula Reviews",
    excerpt:
      "Parenthood can be challenging, and we at ZeroHarm Sciences understand that. Zeroharm Narie Fertility Formula reviews show real success stories from hopeful mothers.",
    tag: "Parenthood",
    image: blogMotherhood,
    date: "Mar 15, 2026",
  },
  {
    title: "Fat Burner Tablets Explained: Benefits & Usage Tips",
    excerpt:
      "Looking to boost your weight loss journey and tackle stubborn fat? Fat burner tablets can help by enhancing metabolism and supporting your fitness goals.",
    tag: "Wellness",
    image: blogFatburner,
    date: "Mar 10, 2026",
  },
  {
    title: "How to Clean Your Lungs After Smoking",
    excerpt:
      "Did you know your lungs begin repairing themselves immediately after you quit smoking? Taking proactive steps helps accelerate recovery naturally.",
    tag: "Health Guide",
    image: blogLungs,
    date: "Mar 5, 2026",
  },
];

const FeaturedBlogsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Featured News &amp; Blogs
          </h2>
          <p className="mt-3 text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto">
            Stay informed with our latest insights on health &amp; wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              to="/blog"
              key={post.title}
              className="group flex flex-col rounded-2xl bg-card overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52 md:h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="rounded-full bg-secondary px-3 py-0.5 font-body text-xs font-medium text-secondary-foreground">
                    {post.tag}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <span className="mt-auto pt-4 font-body text-sm font-semibold text-primary inline-flex items-center gap-1 transition-colors group-hover:text-accent">
                  Read More
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogsSection;
