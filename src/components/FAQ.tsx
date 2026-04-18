import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How does OneMeet actually work?",
    a: "OneMeet uses precise proximity to surface verified people physically near you, at a café, conference, campus, or hotel. You only appear to others when you choose to be discoverable, and connections require mutual consent before any chat begins.",
  },
  {
    q: "Is my location shared with other users?",
    a: "Never. We show approximate proximity (e.g. \"nearby\"), never exact coordinates. Your raw location data stays on your device and is never shared with other users or sold to third parties.",
  },
  {
    q: "How do you prevent fake profiles?",
    a: "Every account requires a live face verification at signup, matched against a government-issued ID. There are no anonymous accounts, no bots, and no recycled photos. Just real people.",
  },
  {
    q: "Is OneMeet free to use?",
    a: "Yes. The core experience, including discovery, verification, and chat, is free forever. We'll introduce optional Pro features later for power users, but proximity networking will always be free.",
  },
  {
    q: "Where is OneMeet available?",
    a: "We have only started in Bangalore, Karnataka as of now, but eventually we'll be expanding to other metropolitan cities as well. Join the waitlist to be notified when we arrive in your city.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-navy/45">
            Frequently Asked
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 font-display text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-navy md:text-[52px]"
          >
            Everything you'd want to know.
          </motion.h2>
          <p className="mt-5 text-[15px] leading-[1.65] text-muted-foreground">
            Privacy, verification, availability. Straight answers, no fine print.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-14"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-navy/10"
              >
                <AccordionTrigger className="py-6 text-left font-display text-[17px] font-semibold tracking-[-0.01em] text-navy hover:no-underline md:text-[19px]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-[1.7] text-muted-foreground md:text-[16px]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
