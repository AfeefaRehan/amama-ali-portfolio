import { motion } from "framer-motion";
import { Download, Mail, MoveRight } from "lucide-react";
import { contact, roleTags } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 md:pt-28 pb-10 md:pb-14"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(179,208,198,0.14),_transparent_42%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">

          {/* LEFT */}
          <div className="order-2 lg:order-1">

            {/* STATUS */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="
                inline-flex items-center gap-2
                rounded-full border border-teal/10
                bg-white/85 px-3 py-1.5
                text-[10px] font-medium text-teal
                shadow-sm backdrop-blur-xl
              "
            >
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="
                mt-5
                text-[3rem]
                sm:text-[4rem]
                md:text-[5rem]
                leading-none
                font-semibold
                tracking-tight
                text-teal
              "
            >
              Amama
              <span className="italic text-gold"> Ali</span>.
            </motion.h1>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.55 }}
              className="
                mt-5
                max-w-xl
                text-[14px]
                leading-7
                text-teal/72
                sm:text-[15px]
              "
            >
              Bridging people,
              business,
              AI,
              and cybersecurity —
              building digital experiences that feel secure,
              strategic,
              and human-centered.
            </motion.p>

            {/* TAGS */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="mt-6 flex flex-wrap gap-2"
            >

              {roleTags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border border-teal/10
                    bg-white/80
                    px-3 py-1.5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-teal/75
                    shadow-sm
                  "
                >
                  {tag}
                </span>
              ))}

            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.55 }}
              className="mt-7 flex flex-wrap gap-3"
            >

              <a
                href="#projects"
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-teal
                  px-5 py-3
                  text-[13px] font-medium text-white
                  transition-all duration-300
                  hover:scale-[1.03]
                "
              >
                View Projects
                <MoveRight size={15} />
              </a>

              <a
                href={contact.cvPath}
                download
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-teal/10
                  bg-white px-5 py-3
                  text-[13px] font-medium text-teal
                  shadow-sm transition-all duration-300
                  hover:scale-[1.03]
                "
              >
                Download CV
                <Download size={15} />
              </a>

              <a
                href="#contact"
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-gold
                  px-5 py-3
                  text-[13px] font-medium text-teal
                  transition-all duration-300
                  hover:scale-[1.03]
                "
              >
                Contact Me
                <Mail size={15} />
              </a>

            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
            className="order-1 lg:order-2"
          >

       <div className="relative mx-auto max-w-[300px] sm:max-w-[380px] px-6 sm:px-0">

              {/* Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold/10 via-transparent to-mint/12 blur-2xl" />

              {/* MAIN CARD */}
              <div
                className="
                  relative
           overflow-visible isolate
                  rounded-[30px]
                  border border-teal/10
                  bg-white/90
                  p-3
                  shadow-glow
                  backdrop-blur-xl
                "
              >

                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">

                  <img
                    src="/images/profile-placeholder.jpeg"
                    alt="Amama Ali"
                    className="h-full w-full object-cover"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal/95 via-teal/50 to-transparent p-4">

                    <h3 className="text-[1.1rem] font-semibold text-white">
                      Amama Ali
                    </h3>

                    <p className="mono mt-1 text-[9px] uppercase tracking-[0.22em] text-white/75">
                      Cyber Security • AI • HR
                    </p>

                  </div>

                </div>

             {/* EXPERTISE BOX */}
<div
  className="
    absolute
    left-[-20px]
    top-6
    z-30
    rounded-[22px]
    border border-[#d9c89f]
    bg-[#d9c89f]
    px-5 py-4
    shadow-[0_18px_40px_rgba(0,0,0,0.18)]
    backdrop-blur-xl
  "
>

  <p className="mono text-[9px] uppercase tracking-[0.24em] text-teal/45">
    Expertise
  </p>

  <p className="mt-1 text-[13px] font-semibold text-teal whitespace-nowrap">
    Trusted • Secure
  </p>

</div>

{/* LOCATION BOX
<div
  className="
    absolute
    bottom-4 sm:bottom-5
    right-[-8px] sm:right-[-18px]
    z-30
    rounded-[20px]
    border border-white/15
    bg-teal/82
    px-4 py-3
    shadow-[0_18px_40px_rgba(0,0,0,0.16)]
    backdrop-blur-xl
  "
>

  <p className="mono text-[8px] uppercase tracking-[0.22em] text-white/60">
    Location
  </p>

  <p className="mt-1 text-[12px] sm:text-[13px] font-semibold text-white whitespace-nowrap">
    Lahore, PK
  </p>

</div> */}
              </div>

            </div>

          </motion.div>

        </div>

        {/* STATS */}
        <div className="mt-7 grid gap-3 sm:grid-cols-3">

          {/* CARD */}
          <div
            className="
              rounded-[24px]
              border border-teal/10
              bg-white/80
              p-4
              shadow-soft
              backdrop-blur-xl
            "
          >

            <p className="mono text-[9px] uppercase tracking-[0.2em] text-teal/40">
              Experience
            </p>

            <h3 className="mt-2 text-[2rem] leading-none font-semibold text-teal">
              2+
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-teal/70">
              Professional & freelance experience
            </p>

          </div>

          {/* CARD */}
          <div
            className="
              rounded-[24px]
              border border-teal/10
              bg-white/80
              p-4
              shadow-soft
              backdrop-blur-xl
            "
          >

            <p className="mono text-[9px] uppercase tracking-[0.2em] text-teal/40">
              Certifications
            </p>

            <h3 className="mt-2 text-[2rem] leading-none font-semibold text-teal">
              7+
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-teal/70">
              AI, Cyber Security & Analytics
            </p>

          </div>

          {/* CARD */}
          <div
            className="
              rounded-[24px]
              border border-teal/10
              bg-white/80
              p-4
              shadow-soft
              backdrop-blur-xl
            "
          >

            <p className="mono text-[9px] uppercase tracking-[0.2em] text-teal/40">
              Focus
            </p>

            <h3 className="mt-2 text-[1.2rem] leading-snug font-semibold text-teal">
              Secure Digital Experiences
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-teal/70">
              AI, security, business & people
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
