import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = {
  "Cyber Security": [
    { name: "Network Security", level: 92 },
    { name: "Penetration Testing", level: 88 },
    { name: "Encryption", level: 84 },
    { name: "Threat Mitigation", level: 86 },
  ],

  "AI / Data": [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 84 },
    { name: "Predictive Analytics", level: 86 },
    { name: "Data Privacy", level: 82 },
  ],

  "Business & HR": [
    { name: "Recruitment", level: 88 },
    { name: "Client Relations", level: 86 },
    { name: "B2B Sales", level: 84 },
    { name: "Strategy", level: 82 },
  ],

  "Frontend & Tools": [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 93 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
  ],
};

const categoryIcons = {
  "Cyber Security": "🛡️",
  "AI / Data": "🤖",
  "Business & HR": "💼",
  "Frontend & Tools": "⚛️",
};

export default function Skills() {

  const categories = useMemo(
    () => Object.keys(skillGroups),
    []
  );

  const [active, setActive] = useState(categories[0]);

  const activeSkills = skillGroups[active];

  return (

    <section
      id="skills"
      className="relative overflow-hidden py-12 md:py-16"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <SectionHeading
            eyebrow="Skills"
            title="Technical & Professional Skills"
            subtitle="Cybersecurity, AI systems, frontend engineering, and business expertise."
          />

        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[210px_1fr]">

          {/* LEFT SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              flex gap-3 overflow-x-auto pb-2
              lg:flex-col lg:overflow-visible
            "
          >

            {categories.map((category) => {

              const isActive = active === category;

              return (

                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className={`
                    flex items-center gap-3
                    rounded-[20px]
                    border
                    px-4 py-3
                    text-left
                    transition-all duration-300
                    min-w-[190px]
                    lg:min-w-0

                    ${
                      isActive
                        ? "border-gold/25 bg-gold/10"
                        : "border-transparent bg-white/75 hover:border-gold/20"
                    }
                  `}
                >

                  {/* ICON */}
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center
                      rounded-xl text-base

                      ${
                        isActive
                          ? "bg-gold text-teal"
                          : "bg-cream text-teal/70"
                      }
                    `}
                  >
                    {categoryIcons[category]}
                  </div>

                  {/* TITLE */}
                  <div>

                    <p
                      className={`
                        text-[14px] font-medium leading-tight

                        ${
                          isActive
                            ? "text-teal"
                            : "text-teal/55"
                        }
                      `}
                    >
                      {category}
                    </p>

                  </div>

                </button>

              );
            })}

          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="
              rounded-[26px]
              border border-gold/20
              bg-white/88
              p-5
              shadow-soft
            "
          >

            {/* TOP */}
            <div className="flex items-center justify-between gap-4">

              <div>

                <div className="flex items-center gap-3">

                  <div className="h-1 w-12 rounded-full bg-gold" />

                  <span className="mono text-[9px] uppercase tracking-[0.24em] text-teal/40">
                    Expertise
                  </span>

                </div>

                <h3 className="mt-3 text-[1.9rem] sm:text-[2.2rem] leading-none font-semibold tracking-tight text-teal">
                  {active}
                </h3>

              </div>

              <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-teal/20">
                <div className="h-2.5 w-2.5 rounded-full bg-teal" />
              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-2xl text-[13px] leading-6 text-teal/65 sm:text-sm">

              {active === "Cyber Security" &&
                "Experience with secure systems, ethical hacking concepts, encryption, and network protection."}

              {active === "AI / Data" &&
                "Working with AI workflows, analytics, Python, and biometric recommendation systems."}

              {active === "Business & HR" &&
                "Skilled in recruitment, communication, HR coordination, strategy, and client handling."}

              {active === "Frontend & Tools" &&
                "Building responsive interfaces with modern frontend technologies and UI-focused development."}

            </p>

            {/* SKILLS */}
            <div className="mt-6 space-y-4">

              {activeSkills.map((skill, index) => (

                <div key={skill.name}>

                  <div className="mb-2 flex items-center justify-between gap-4">

                    <span className="text-[14px] font-medium text-teal/85">
                      {skill.name}
                    </span>

                    <span className="mono text-[9px] text-teal/40">
                      {skill.level}%
                    </span>

                  </div>

                  {/* PROGRESS */}
                  <div className="h-2 w-full overflow-hidden rounded-full bg-cream">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.04
                      }}
                      className="h-full rounded-full bg-gold"
                    />

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}