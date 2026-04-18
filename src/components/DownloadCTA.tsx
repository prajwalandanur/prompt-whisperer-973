import { motion } from "framer-motion";
import qrImg from "@/assets/onemeet-qr.png";
import mockupMap from "@/assets/mockup-map.png";
import mockupProfile from "@/assets/mockup-profile.png";
import mockupMessages from "@/assets/mockup-messages.png";

type PhoneProps = {
  src: string;
  alt: string;
  rotate: number;
  z: number;
  delay: number;
  width?: string;
  translateY?: string;
  className?: string;
};

function PhoneMockup({
  src,
  alt,
  rotate,
  z,
  delay,
  width = "w-[170px] md:w-[195px]",
  translateY = "",
  className = "",
}: PhoneProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      style={{ zIndex: 10 + z }}
      className={`relative ${translateY} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`h-auto ${width} select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]`}
        draggable={false}
      />
    </motion.div>
  );
}

export function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[#0C2548] py-16 md:py-20"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[10%] h-72 w-72 rounded-full bg-[#4F8EF7]/15 blur-3xl" />
        <div className="absolute right-[10%] bottom-[5%] h-96 w-96 rounded-full bg-[#1B447D]/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
              Get the app
            </p>
            <h2 className="mt-4 font-display text-[36px] font-bold leading-[1.02] tracking-[-0.025em] text-white md:text-[48px]">
              The next conversation is closer than you think.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-[1.6] text-white/65 md:text-[16px]">
              Download OneMeet and discover the people already around you.
              Verified, intentional, and ready to connect.
            </p>

            {/* QR + Stores */}
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="rounded-2xl bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <img
                  src={qrImg}
                  alt="Scan to download OneMeet"
                  className="h-44 w-44 object-contain md:h-48 md:w-48"
                />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                  Scan or tap
                </p>
                <a
                  href="#"
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
                <a
                  href="#"
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
              </div>
            </div>
          </motion.div>

          {/* RIGHT — phone mockups: center raised, side phones lower */}
          <div className="lg:col-span-7">
            <div className="relative flex items-center justify-center pt-4 lg:pt-0">
              <div className="relative flex items-end justify-center">
                <div className="-mr-8 hidden md:block">
                  <PhoneMockup
                    src={mockupMap}
                    alt="OneMeet nearby map screen"
                    rotate={-8}
                    z={0}
                    delay={0.05}
                    translateY="translate-y-6"
                  />
                </div>
                <div className="relative z-20">
                  <PhoneMockup
                    src={mockupProfile}
                    alt="OneMeet profile screen"
                    rotate={0}
                    z={2}
                    delay={0.2}
                    width="w-[190px] md:w-[215px]"
                    translateY="-translate-y-6"
                  />
                </div>
                <div className="-ml-8 hidden md:block">
                  <PhoneMockup
                    src={mockupMessages}
                    alt="OneMeet messages screen"
                    rotate={8}
                    z={1}
                    delay={0.35}
                    translateY="translate-y-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
