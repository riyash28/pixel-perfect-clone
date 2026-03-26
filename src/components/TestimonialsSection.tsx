import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ZeroHarm's comprehensive approach to holistic wellness is revolutionary. As an expert, I wholeheartedly endorse their dedication to nurturing health from within.",
    name: "Dr. Shalini Patodiya",
    title: "Dermatologist & Holistic Wellness Expert",
  },
  {
    quote: "I've seen remarkable transformations with ZeroHarm's holistic care. Their commitment to overall well-being and natural health solutions is exemplary.",
    name: "Dr. Bharat Patodiya",
    title: "Consultant Medical Oncologist",
  },
  {
    quote: "ZeroHarm's holistic vision reshapes health standards. I proudly support their integrative approach that empowers individuals towards sustained well-being.",
    name: "Dr. Sudhakar Darbawar",
    title: "45 Years of Experience in Medical Field",
  },
  {
    quote: "Having witnessed ZeroHarm's impact firsthand, I believe in their holistic methods for women's care. Their comprehensive approach fosters empowerment.",
    name: "Dr. Snehal R Pansare",
    title: "Obstetrician and Gynaecologist",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-card py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-3xl font-semibold text-foreground lg:text-4xl">
          What Leading Industry Experts Say
        </h2>

        <div className="relative mt-10">
          <Quote size={40} className="mx-auto text-primary/20" />
          <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground italic">
            "{testimonials[current].quote}"
          </p>
          <h4 className="mt-6 font-display text-lg font-semibold text-foreground">
            {testimonials[current].name}
          </h4>
          <p className="font-body text-sm text-muted-foreground">
            {testimonials[current].title}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-muted"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
