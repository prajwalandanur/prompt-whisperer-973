import { motion } from "framer-motion";
import discoverIcon from "@/assets/how-it-works/discover.webp";
import requestIcon from "@/assets/how-it-works/request.webp";
import conversationIcon from "@/assets/how-it-works/conversation.webp";

type Step = {
  label: string;
  icon: string;
  alt: string;
  title: string;
  body: string;
  iconClass?: string;
};

const STEPS: Step[] = [
  {
    label: "Step 01",
    icon: discoverIcon,
    alt: "Location pin with people inside",
    title: "Open and Discover",
    body: "See verified OneMeet users active near you. Step within 50 meters and profiles begin to appear.",
  },
  {
    label: "Step 02",
    icon: requestIcon,
    alt: "Person sending a connection request to another person",
    title: "Send a Request",
    body: "Found someone interesting? Send a request. Chat unlocks only when both of you accept.",
    iconClass: "h-[140px] w-[140px] md:h-[160px] md:w-[160px]",
  },
  {
    label: "Step 03",
    icon: conversationIcon,
    alt: "Two chat bubbles in conversation",
    title: "Start the Conversation",
    body: "Explore shared interests and start chatting, or simply walk over and say hello.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-navy md:text-[56px]"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-5 text-[15px] leading-[1.65] text-muted-foreground"
          >
            Three intentional steps to your next real connection.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-16 md:mt-24 md:grid-cols-3 md:gap-x-12 md:gap-y-0 lg:gap-x-20">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="group flex flex-col items-center text-center transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              <div className="flex h-[180px] w-[180px] items-center justify-center md:h-[200px] md:w-[200px]">
                <img
                  src={step.icon}
                  alt={step.alt}
                  width={200}
                  height={200}
                  loading="lazy"
                  className={`object-contain transition-transform duration-300 ease-out group-hover:scale-[1.05] ${step.iconClass ?? "h-[98px] w-[98px] md:h-[112px] md:w-[112px]"}`}
                />
              </div>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-navy/45">
                {step.label}
              </p>

              <h3 className="mt-2 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.015em] text-navy md:text-[32px]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-[280px] text-[14.5px] leading-[1.55] text-muted-foreground">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
