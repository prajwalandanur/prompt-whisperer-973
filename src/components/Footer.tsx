import { Link } from "@tanstack/react-router";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";

const LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Download", href: "#download" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const SOCIALS = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-background pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="OneMeet home"
            >
              <Logo sizeClassName="text-[26px] md:text-[28px]" />
            </Link>
            <p className="mt-5 max-w-sm text-[14px] font-medium leading-[1.65] text-navy/75">
              Real connections, real proximity, real people. Built for the
              moments that happen in the space between strangers.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-navy/70 transition-all hover:-translate-y-0.5 hover:border-navy hover:text-navy"
                >
                  <s.icon className="h-4 w-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-6 md:col-span-7 md:gap-8">
            {Object.entries(LINKS).map(([group, items]) => (
              <div key={group}>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-navy/70">
                  {group}
                </div>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[14px] font-medium text-navy/85 transition-colors hover:text-navy"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-navy/10 pt-6 md:flex-row md:items-center">
          <p className="text-[12px] font-medium text-navy/70">
            © {new Date().getFullYear()} OneMeet. All rights reserved.
          </p>
          <p className="text-[12px] font-medium text-navy/70">
            Designed with intention. Built for real people.
          </p>
        </div>
      </div>
    </footer>
  );
}
