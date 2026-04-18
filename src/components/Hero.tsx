import { motion } from "framer-motion";
import handPhone from "@/assets/hand-phone.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

function AppStoreBadge() {
  return (
    <a
      href="#download"
      aria-label="Download on the App Store"
      className="inline-flex items-center gap-3 rounded-xl bg-navy px-5 py-3 text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-hover"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="currentColor">
        <path d="M17.564 12.78c-.022-2.225 1.819-3.293 1.902-3.345-1.036-1.514-2.65-1.722-3.226-1.745-1.374-.139-2.683.81-3.381.81-.7 0-1.776-.79-2.92-.768-1.503.022-2.888.873-3.66 2.215-1.56 2.704-.4 6.704 1.121 8.901.745 1.075 1.633 2.282 2.797 2.24 1.122-.045 1.547-.726 2.903-.726 1.355 0 1.737.726 2.92.704 1.205-.022 1.969-1.097 2.706-2.176.852-1.247 1.205-2.453 1.226-2.515-.027-.012-2.348-.9-2.388-3.595zM15.36 6.176c.62-.75 1.04-1.793.925-2.835-.895.036-1.978.595-2.62 1.345-.575.664-1.078 1.726-.943 2.748 1 .078 2.018-.508 2.638-1.258z" />
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase tracking-wide text-white/70">
          Download on the
        </div>
        <div className="font-display text-[16px] font-semibold">App Store</div>
      </div>
    </a>
  );
}

function PlayStoreBadge() {
  return (
    <a
      href="#download"
      aria-label="Get it on Google Play"
      className="inline-flex items-center gap-3 rounded-xl bg-navy px-5 py-3 text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-hover"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5L13 12 3.6 2.3z"
          fill="#4F8EF7"
        />
        <path d="M16.8 8.6 13 12l3.8 3.4 4.4-2.5c1.1-.6 1.1-2.2 0-2.8l-4.4-2.5z" fill="#FFC107" />
        <path d="M3.6 21.7c.5.4 1.2.4 2-.1l11.2-6.4L13 12 3.6 21.7z" fill="#EA4335" />
        <path d="M3.6 2.3 13 12l3.8-3.4L5.6 2.4c-.8-.5-1.5-.5-2-.1z" fill="#34A853" />
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase tracking-wide text-white/70">
          GET IT ON
        </div>
        <div className="font-display text-[16px] font-semibold">Google Play</div>
      </div>
    </a>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-28 pb-20 md:pt-32 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[32px] border border-border bg-surface-soft shadow-[0_20px_60px_-30px_rgba(17,48,91,0.25)]"
        >
          <div className="grid grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-[1.15fr_1fr] md:gap-6 md:px-10 md:py-14 lg:px-16 lg:py-16">
            {/* Left — copy */}
            <div className="order-2 md:order-1">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.15}
                className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-navy md:text-[52px] lg:text-[64px]"
              >
                The People{" "}
                <span className="text-accent">Around You</span>{" "}
                Are Your Next Opportunity.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.3}
                className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-muted-foreground md:text-[18px]"
              >
                OneMeet lets you discover and connect with verified
                professionals physically nearby. No cold messages. No fake
                profiles. Just real people in the same room as you.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.5}
                className="mt-10"
              >
                <p className="font-display text-[18px] font-semibold text-navy">Get The App</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <AppStoreBadge />
                  <PlayStoreBadge />
                </div>
                <p className="mt-4 text-[13px] text-muted-foreground">
                  Face-verified profiles. Zero fake accounts. Free to download.
                </p>
              </motion.div>
            </div>

            {/* Right — hand holding phone, tilted toward content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: -12 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              className="order-1 flex justify-center md:order-2 md:justify-end"
              style={{ transformOrigin: "center center" }}
            >
              <img
                src={handPhone}
                alt="A hand holding a phone showing the OneMeet welcome screen"
                className="w-full max-w-[280px] select-none md:max-w-[320px] lg:max-w-[380px]"
                draggable={false}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
