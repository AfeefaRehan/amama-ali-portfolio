import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-cream-deep/45 py-12 md:py-16"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-mint/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Projects"
            title="Selected technical work"
            subtitle="AI systems, frontend development, analytics, and cybersecurity projects."
          />
        </div>

        {/* Horizontal Scroll */}
        <div className="mt-8 overflow-x-auto scrollbar-hide pb-3">
          
          <div className="flex w-max gap-4">

            {projects.map((project, index) => (

              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`
                  group
                  relative
                  flex
                  min-h-[320px]
                  w-[285px]
                  sm:w-[315px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[26px]
                  border
                  p-4
                  sm:p-5
                  shadow-soft
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-glow

                  ${
                    index === 0
                      ? "border-gold/25 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,246,238,0.96))]"
                      : "border-teal/10 bg-white/88 backdrop-blur-xl"
                  }
                `}
              >

                {/* Featured */}
                {index === 0 && (
                  <div className="absolute right-4 top-4 rounded-full bg-gold/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Featured
                  </div>
                )}

                {/* TOP */}
                <div>

                  <p className="mono text-[9px] uppercase tracking-[0.24em] text-teal/45">
                    {project.type}
                  </p>

                  <h3 className="mt-3 font-display text-[1.8rem] leading-none font-semibold tracking-tight text-teal sm:text-[2rem]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-teal/72 sm:text-[14px]">
                    {project.description}
                  </p>

                </div>

                {/* BOTTOM */}
                <div className="mt-6">

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-[#E8B15A]
                          bg-[#E8B15A]
                          px-3
                          py-1.5
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-[#1B4543]
                          shadow-sm
                        "
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  {/* BUTTON */}
                  {project.title === "Palette & Fit" && (

                    <a
                      href="https://paletteandfit.site/"
                      target="_blank"
                      rel="noreferrer"
                      className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-teal
                        px-4
                        py-2.5
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

                  )}

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}