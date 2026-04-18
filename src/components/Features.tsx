import { motion } from "framer-motion";
import {
  Radar,
  ShieldCheck,
  Handshake,
  MessagesSquare,
} from "lucide-react";
import type { ReactNode } from "react";

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
};

/* ---------- Visual placeholders (premium, on-brand) ---------- */

function RadarVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-soft">
      <div className="absolute inset-0 flex items-center justify-center">
        {[0.95, 0.72, 0.5, 0.28].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-navy/10"
            style={{
              width: `${s * 100}%`,
              height: `${s * 100}%`,
            }}
          />
        ))}
        <motion.div
          className="absolute h-full w-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--navy) 20%, transparent) 60deg, transparent 90deg)",
            borderRadius: "50%",
            maskImage:
              "radial-gradient(circle, black 0%, black 50%, transparent 50%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-lg">
          <Radar className="h-4.5 w-4.5" />
        </div>
        {[
          { x: "62%", y: "38%" },
          { x: "34%", y: "58%" },
          { x: "70%", y: "66%" },
          { x: "44%", y: "30%" },
        ].map((d, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-accent shadow-[0_0_0_5px_color-mix(in_oklab,var(--accent)_25%,transparent)]"
            style={{ left: d.x, top: d.y }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{
              duration: 2.4,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function VerifiedVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-soft">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="h-32 w-32 rounded-full bg-white shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--navy)_30%,transparent)] ring-1 ring-navy/10" />
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-navy/5 to-navy/15" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -bottom-1.5 -right-1.5 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-xl"
          >
            <ShieldCheck className="h-5 w-5" />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-xl border border-navy/10 bg-white/80 p-2.5 backdrop-blur">
        <div className="h-2 w-2 rounded-full bg-emerald-500" />
        <p className="text-[11px] font-medium text-navy">
          Face verified · Real human
        </p>
      </div>
    </div>
  );
}

function ConsentVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-soft p-5">
      <div className="flex h-full flex-col justify-center gap-2">
        {[
          { name: "Aanya M.", role: "Product Designer", state: "accepted" },
          { name: "Rohan K.", role: "Founder, Fintech", state: "pending" },
          { name: "Sara P.", role: "Engineering Lead", state: "accepted" },
        ].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="flex items-center gap-2.5 rounded-xl border border-navy/10 bg-white p-2.5 shadow-sm"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-navy/15 to-navy/35" />
            <div className="flex-1 min-w-0">
              <p className="truncate text-[12px] font-semibold text-navy">
                {p.name}
              </p>
              <p className="truncate text-[10px] text-muted-foreground">
                {p.role}
              </p>
            </div>
            {p.state === "accepted" ? (
              <span className="rounded-full bg-navy px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                Connected
              </span>
            ) : (
              <span className="rounded-full border border-navy/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-navy/60">
                Awaiting
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ChatVisual() {
  const messages = [
    { from: "them", text: "Hey! Saw you're in the same building 👋" },
    { from: "me", text: "Yes! Coffee at 4?" },
    { from: "them", text: "Perfect. Lobby." },
  ];
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-soft p-5">
      <div className="flex h-full flex-col justify-center gap-2">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18, duration: 0.4 }}
            className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-[12.5px] leading-snug shadow-sm ${
              m.from === "me"
                ? "ml-auto bg-navy text-white"
                : "bg-white text-navy ring-1 ring-navy/10"
            }`}
          >
            {m.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const FEATURES: Feature[] = [
  {
    eyebrow: "Proximity Discovery",
    title: "See who's actually around you.",
    body: "OneMeet shows verified people active within 50 meters. At your office, conference, café, or campus.",
    visual: <RadarVisual />,
  },
  {
    eyebrow: "Face Verified Profiles",
    title: "Every profile is a real person.",
    body: "We verify each user with a live face check. Zero fake accounts, zero catfishing. Just real humans.",
    visual: <VerifiedVisual />,
  },
  {
    eyebrow: "Mutual Consent",
    title: "Chat unlocks when both say yes.",
    body: "Send a request. Wait for acceptance. No unsolicited messages, no pressure. Networking the way it should be.",
    visual: <ConsentVisual />,
  },
  {
    eyebrow: "Light, Intentional Chat",
    title: "Built for short, meaningful exchanges.",
    body: "OneMeet's chat is designed to move the conversation off-screen, into a hello, a coffee, or a real meeting.",
    visual: <ChatVisual />,
  },
];

const ICONS = [Radar, ShieldCheck, Handshake, MessagesSquare];

export function Features() {
  return (
    <section id="features" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-navy/45">
            Features
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 font-display text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-navy md:text-[56px]"
          >
            Built for real-world connection.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-5 text-[15px] leading-[1.65] text-muted-foreground"
          >
            Four intentional pillars that make OneMeet feel different from
            anything else you've used.
          </motion.p>
        </div>

        {/* 2x2 Card grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: (i % 2) * 0.08,
                }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white p-5 shadow-[0_2px_20px_-12px_color-mix(in_oklab,var(--navy)_25%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--navy)_30%,transparent)] md:p-6"
              >
                {/* Visual on top */}
                {f.visual}

                {/* Content below */}
                <div className="mt-6 flex flex-col">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-navy/10 bg-surface-soft px-3 py-1.5">
                    <Icon className="h-3.5 w-3.5 text-navy" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/70">
                      {f.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-navy md:text-[26px]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
