import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-cream-deep/50 py-12 md:py-16"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Experience"
            title="Work history"
            subtitle="HR, business development, frontend work, and secure digital experiences."
          />
        </div>

        {/* TIMELINE */}
        <div className="relative mx-auto mt-8 max-w-4xl">

          {/* Vertical Line */}
          <div
            className="absolute left-[18px] top-0 bottom-0 hidden sm:block w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(232,177,90,0.55), rgba(27,69,67,0.10), transparent)",
            }}
          />

          <div className="space-y-4">

            {experience.map((item, index) => (
              <motion.article
                key={`${item.role}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative sm:pl-14"
              >

                {/* Timeline Dot */}
                <div className="absolute left-[10px] top-5 hidden sm:block">
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <div className="absolute h-4 w-4 rounded-full bg-gold/20 animate-ping" />
                    <div className="relative h-2.5 w-2.5 rounded-full bg-gold" />
                  </div>
                </div>

                {/* CARD */}
                <div className="rounded-[24px] border border-teal/10 bg-white/88 p-4 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-5">

                  {/* TOP */}
                  <div className="flex flex-wrap items-start justify-between gap-3">

                    <div className="flex items-start gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                        <Briefcase size={15} />
                      </div>

                      <div>
                        <h3 className="font-display text-[1.05rem] font-semibold leading-tight text-teal sm:text-[1.2rem]">
                          {item.role}
                        </h3>

                        <p className="mt-1 text-[13px] text-teal/65 sm:text-sm">
                          {item.company}
                        </p>
                      </div>

                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1">

                      <span className="mono text-[9px] uppercase tracking-[0.24em] text-teal/45">
                        {item.date}
                      </span>

                      <span className="rounded-full bg-gold px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-teal">
                        {item.type}
                      </span>

                    </div>

                  </div>

                  {/* BULLETS */}
                  <div className="mt-4 space-y-2.5">

                    {item.bullets.map((bullet, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-2 rounded-2xl bg-cream/70 px-3 py-3"
                      >

                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />

                        <p className="text-[13px] leading-6 text-teal/75 sm:text-sm">
                          {bullet}
                        </p>

                      </div>
                    ))}

                  </div>

                  {/* TAGS */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-teal/10 bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-teal/70 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}