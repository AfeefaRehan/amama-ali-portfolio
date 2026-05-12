import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-cream-deep/55 py-12 md:py-16"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <SectionHeading
            eyebrow="Certifications"
            title="Professional certifications"
            subtitle="Security, AI, analytics, and professional learning credentials."
          />

        </div>

        {/* GRID */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

          {certifications.map((cert, index) => (

            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-gold/20
                bg-white/88
                p-5
                shadow-soft
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-glow
              "
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-mint/10" />

              {/* TOP */}
              <div className="flex items-start justify-between gap-3">

                <div className="flex items-start gap-3">

                  {/* ICON */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-base">
                    🎖️
                  </div>

                  {/* CONTENT */}
                  <div>

                    <p className="mono text-[9px] uppercase tracking-[0.24em] text-teal/40">
                      Certification
                    </p>

                    <h3 className="mt-2 text-[1.1rem] leading-snug font-semibold text-teal">
                      {cert.name}
                    </h3>

                  </div>

                </div>

                {/* YEAR */}
                <span className="rounded-full bg-gold px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-teal whitespace-nowrap">
                  {cert.year}
                </span>

              </div>

              {/* ISSUER */}
              <p className="mt-4 text-[13px] leading-6 text-teal/70">
                {cert.issuer}
              </p>

              {/* BOTTOM */}
              <div className="mt-5 flex items-center gap-2">

                <div className="h-px flex-1 bg-teal/10" />

                <div className="h-1.5 w-1.5 rounded-full bg-gold" />

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}