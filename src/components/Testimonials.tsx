import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  color: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I met two co-founders at a café in Koramangala, Bangalore. None of us would have spoken otherwise. OneMeet just made it natural.",
    name: "Prajwal",
    role: "Co-founder & CMO, Levion Studio",
    color: "from-[#4F8EF7] to-[#11305B]",
  },
  {
    quote:
      "At a 4,000-person tech summit in Bangalore, I found exactly the three designers I wanted to talk to, before the keynote even ended.",
    name: "Ananya Sharma",
    role: "Product Designer, Bengaluru",
    color: "from-[#7FB3FF] to-[#1B447D]",
  },
  {
    quote:
      "I travel between cities for work constantly. OneMeet makes new places feel less lonely without the awkwardness of cold DMs.",
    name: "Rahul Verma",
    role: "Remote Engineer, Hyderabad",
    color: "from-[#11305B] to-[#0C2548]",
  },
  {
    quote:
      "Every profile is verified. That changes everything. The conversations are real, intentional, and respectful.",
    name: "Meera Iyer",
    role: "Postgrad Researcher, IISc Bangalore",
    color: "from-[#4F8EF7] to-[#1B447D]",
  },
  {
    quote:
      "As a college student, I finally found a way to meet people on campus beyond my own circle. It's the first networking app that actually feels like meeting people.",
    name: "Aditya Nair",
    role: "Student, Christ University",
    color: "from-[#1B447D] to-[#0C2548]",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, [index]);

  const goPrev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-navy/45">
            Loved by early users
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-navy md:text-[52px]">
            Real people. Real moments.
          </h2>
        </div>

        <div className="relative mt-16 min-h-[280px] md:min-h-[260px]">
          {/* Arrow controls */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-all hover:-translate-y-1/2 hover:border-navy/30 hover:bg-navy hover:text-white md:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-all hover:-translate-y-1/2 hover:border-navy/30 hover:bg-navy hover:text-white md:inline-flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mx-auto max-w-3xl px-2 text-center md:px-14"
            >
              <blockquote className="font-display text-[24px] font-medium leading-[1.35] tracking-[-0.015em] text-navy md:text-[34px]">
                <span className="text-navy/30">&ldquo;</span>
                {t.quote}
                <span className="text-navy/30">&rdquo;</span>
              </blockquote>

              <figcaption className="mt-10 flex items-center justify-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-[14px] font-semibold text-white shadow-[0_8px_20px_color-mix(in_oklab,var(--navy)_25%,transparent)]`}
                >
                  {initials(t.name)}
                </div>
                <div className="text-left">
                  <div className="text-[15px] font-semibold text-navy">{t.name}</div>
                  <div className="text-[13px] text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Mobile arrows + Dots */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-white text-navy md:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-navy"
                    : "w-1.5 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-white text-navy md:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
