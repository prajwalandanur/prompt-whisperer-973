import { motion } from "framer-motion";
import cafeImg from "@/assets/usecase-cafe.png";
import conferenceImg from "@/assets/usecase-conference.png";
import campusImg from "@/assets/usecase-campus.png";
import travelImg from "@/assets/usecase-travel.png";

type Story = {
  label: string;
  title: string;
  body: string;
  support: string;
  image: string;
  alt: string;
  focus: string;
};

const STORIES: Story[] = [
  {
    label: "Cafés & Coworking",
    title: "Turn everyday places into real conversations.",
    body: "Discover people working just a few tables away. Founders, creatives, and professionals open to connect in the moment.",
    support: "No cold outreach. Just natural interaction.",
    image: cafeImg,
    alt: "Friends having a conversation at a café",
    focus: "50% 40%",
  },
  {
    label: "Conferences & Events",
    title: "Find your people before the crowd does.",
    body: "See who's around, what they're working on, and connect before the event ends, without awkward introductions.",
    support: "Make the most of every room you walk into.",
    image: conferenceImg,
    alt: "Group of professionals at a conference",
    focus: "50% 35%",
  },
  {
    label: "Campus & Community",
    title: "Build your circle, one conversation at a time.",
    body: "Meet classmates, collaborators, and like-minded people around you, without random messages or forced interactions.",
    support: "Connections that start naturally, and last.",
    image: campusImg,
    alt: "Student connecting with peers on campus",
    focus: "50% 40%",
  },
  {
    label: "Travel & Hotels",
    title: "Feel connected, wherever you are.",
    body: "Discover professionals and people nearby in a new city, whether you're traveling, working remotely, or exploring.",
    support: "Because the right connection can happen anywhere.",
    image: travelImg,
    alt: "Friends on a road trip exploring a new place",
    focus: "50% 45%",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-navy/45">
            Use Cases
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 font-display text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-navy md:text-[56px]"
          >
            Wherever real people gather.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-5 text-[15px] leading-[1.65] text-muted-foreground"
          >
            OneMeet works in every space where proximity creates opportunity.
          </motion.p>
        </div>

        {/* Storytelling stack */}
        <div className="mt-24 flex flex-col gap-28 md:mt-32 md:gap-40">
          {STORIES.map((s, i) => {
            const imageRight = i % 2 === 1;
            return (
              <div
                key={s.title}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16"
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: imageRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`md:col-span-5 ${
                    imageRight ? "md:order-2" : "md:order-1"
                  }`}
                >
                  {s.label === "Campus & Community" ? (
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      className="mx-auto h-auto w-full max-w-[310px] object-contain drop-shadow-[0_30px_60px_color-mix(in_oklab,var(--navy)_18%,transparent)]"
                    />
                  ) : (
                    <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl aspect-[4/5] drop-shadow-[0_30px_60px_color-mix(in_oklab,var(--navy)_18%,transparent)]">
                      <img
                        src={s.image}
                        alt={s.alt}
                        loading="lazy"
                        style={{ objectPosition: s.focus }}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className={`md:col-span-7 ${
                    imageRight ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-navy/45">
                    {s.label}
                  </p>
                  <h3 className="mt-4 font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-navy md:text-[44px]">
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-[540px] text-[16px] leading-[1.65] text-muted-foreground md:text-[17px]">
                    {s.body}
                  </p>
                  <p className="mt-4 max-w-[540px] text-[14px] font-medium leading-[1.6] text-navy/70">
                    {s.support}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
