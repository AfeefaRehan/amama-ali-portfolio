import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-cream-deep/50 py-12 md:py-16"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <SectionHeading
            eyebrow="Education"
            title="Academic foundation"
            subtitle="AI, cybersecurity, frontend engineering, and practical software development."
          />

        </div>

        {/* MAIN GRID */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr]">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="
              rounded-[26px]
              border border-teal/10
              bg-white/88
              p-5
              shadow-soft
              backdrop-blur-xl
            "
          >

            {/* TOP */}
            <div className="flex flex-wrap items-start justify-between gap-3">

              <div>

                <p className="mono text-[9px] uppercase tracking-[0.24em] text-teal/45">
                  2021 — 2025
                </p>

                <h3 className="mt-2 text-[1.8rem] leading-none font-semibold tracking-tight text-teal">
                  BS Computer Science
                </h3>

                <p className="mt-2 text-[13px] text-teal/65">
                  Minhaj University Lahore
                </p>

              </div>

              {/* CGPA */}
              <div className="rounded-full bg-mint px-3 py-1.5 text-[10px] font-semibold text-teal whitespace-nowrap">
                CGPA 3.38
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-5 space-y-3">

              <p className="text-[13px] leading-6 text-teal/75">
                Focused on AI, Cyber Security, Frontend Development,
                Management, and Human-Centered Technology.
              </p>

              <p className="text-[13px] leading-6 text-teal/75">
                Built multiple management systems using OOP concepts in C++
                while strengthening practical software architecture skills.
              </p>

            </div>

            {/* TAGS */}
            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "Hospital System",
                "Library System",
                "Inventory",
                "Student Record",
              ].map((item) => (

                <span
                  key={item}
                  className="
                    rounded-full
                    border border-teal/10
                    bg-cream
                    px-3 py-1.5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-teal/75
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border border-gold/20
              bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,246,238,0.95))]
              p-5
              shadow-soft
            "
          >

            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl" />

            {/* TOP */}
            <div className="flex items-center gap-3">

              <div className="h-1 w-12 rounded-full bg-gold" />

              <p className="mono text-[9px] uppercase tracking-[0.24em] text-teal/40">
                Final Year Project
              </p>

            </div>

            {/* TITLE */}
            <h4 className="mt-4 text-[1.9rem] leading-none font-semibold tracking-tight text-teal">
              Palette & Fit
            </h4>

            {/* DESCRIPTION */}
            <div className="mt-5 space-y-3">

              <p className="text-[13px] leading-6 text-teal/75">
                AI-powered fashion recommendation platform using biometric
                analysis, skin tone detection, and personalized outfit suggestions.
              </p>

              <p className="text-[13px] leading-6 text-teal/75">
                Designed with intelligent recommendations,
                responsive frontend systems,
                and modern UI/UX principles.
              </p>

            </div>

            {/* TECH TAGS */}
            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "AI",
                "Python",
                "Biometric Security",
                "Frontend",
              ].map((item) => (

                <span
                  key={item}
                  className="
                    rounded-full
                    border border-[#E8B15A]
                    bg-[#E8B15A]
                    px-3 py-1.5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#1B4543]
                  "
                >
                  {item}
                </span>

              ))}

            </div>

            {/* BUTTON */}
            <a
              href="https://paletteandfit.site/"
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-teal
                px-4 py-2.5
                text-[13px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              View Project
              <span>↗</span>
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}