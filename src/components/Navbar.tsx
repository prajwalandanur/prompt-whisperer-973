import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { label: "Features", href: "#features", type: "anchor" as const },
  { label: "How It Works", href: "#how-it-works", type: "anchor" as const },
  { label: "Use Cases", href: "#use-cases", type: "anchor" as const },
  { label: "Safety", href: "#safety", type: "anchor" as const },
  { label: "Blogs", href: "/blogs", type: "route" as const },
];

function Brand({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center ${className}`}
      aria-label="OneMeet home"
    >
      <Logo sizeClassName="text-[22px] md:text-[24px]" />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  const renderLink = (link: (typeof NAV_LINKS)[number], onClick?: () => void, className = "") => {
    if (link.type === "route") {
      return (
        <Link to={link.href} onClick={onClick} className={className}>
          {link.label}
        </Link>
      );
    }
    return (
      <a href={link.href} onClick={onClick} className={className}>
        {link.label}
      </a>
    );
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className={`frosted fixed inset-x-0 top-0 z-50 transition-[border-color,background-color] duration-300 ${
          scrolled ? "border-b border-border" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <motion.div variants={itemVariants}>
            <Brand />
          </motion.div>

          <motion.ul
            variants={containerVariants}
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <motion.li key={link.label} variants={itemVariants}>
                {renderLink(
                  link,
                  undefined,
                  "text-[14px] text-muted-foreground transition-colors duration-200 hover:text-navy",
                )}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="hidden md:block">
            <a
              href="#download"
              className="shimmer-on-hover inline-flex items-center justify-center rounded-full bg-navy px-5 py-2 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-navy-hover"
            >
              Download App
            </a>
          </motion.div>

          <motion.button
            variants={itemVariants}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-navy"
          >
            <Menu size={22} />
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex flex-col bg-background md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <Brand />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.35 }}
                >
                  {renderLink(
                    link,
                    () => setOpen(false),
                    "font-display text-2xl font-semibold text-navy",
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35 }}
              >
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-base font-medium text-white"
                >
                  Download App
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
