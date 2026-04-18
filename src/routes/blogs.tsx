import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Blogs | OneMeet" },
      {
        name: "description",
        content:
          "Stories, ideas, and insights from the OneMeet team. Coming very soon.",
      },
      { property: "og:title", content: "Blogs | OneMeet" },
      {
        property: "og:description",
        content: "Stories, ideas, and insights from the OneMeet team. Coming very soon.",
      },
    ],
  }),
});

function BlogsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 pt-32 pb-24 md:px-10">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-1.5 text-[12px] font-medium text-navy/70 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Something good is brewing
          </div>

          <h1 className="mt-6 font-display text-[44px] font-bold leading-[1.02] tracking-[-0.025em] text-navy md:text-[68px]">
            Blogs are coming
            <br />
            <span className="text-accent">very soon.</span>
          </h1>

          <p className="mt-6 text-[16px] leading-[1.65] text-muted-foreground md:text-[18px]">
            We're putting together stories, product notes, and conversations
            from the people building OneMeet, and the people using it. Check
            back here soon.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-navy-hover"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
