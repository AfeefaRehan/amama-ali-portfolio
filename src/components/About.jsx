import { motion } from "framer-motion";

export default function About() {

  const timeline = [
    {
      year: "2021 — 2025",
      title: "BS Computer Science",
      desc: "Focused on AI, Cyber Security, Web Development & Human-Centered Technology.",
      dot: "bg-gold",
    },
    {
      year: "2023 — Present",
      title: "Professional Journey",
      desc: "Worked across frontend development, HR operations, communication & secure workflows.",
      dot: "bg-teal",
    },
    {
      year: "Vision",
      title: "Secure • Creative • Human",
      desc: "Building modern digital experiences combining security, innovation & people.",
      dot: "bg-mint",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-12 md:py-16"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Label */}
          <div className="flex items-center justify-center gap-3">

            <div className="h-1 w-10 rounded-full bg-gold" />

            <p className="mono text-[9px] uppercase tracking-[0.24em] text-gold">
              About Me
            </p>

          </div>

          {/* Heading */}
          <h2 className="mt-5 text-[2.5rem] sm:text-[3.2rem] md:text-[4rem] leading-none font-semibold tracking-tight text-teal">
            Hey, I’m
            <span className="italic text-gold"> Amama Ali</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-teal/70 sm:text-[15px]">
            Passionate about cybersecurity, AI systems,
            frontend development,
            leadership,
            and building secure human-centered digital experiences.
          </p>

          {/* Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">

            {[
              "Cyber Security",
              "AI",
              "Frontend",
              "Management",
              "Human Tech",
            ].map((item) => (

              <span
                key={item}
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
                {item}
              </span>

            ))}

          </div>

        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT */}
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
            <div className="flex items-center gap-3">

              <div className="h-1 w-12 rounded-full bg-gold" />

              <p className="mono text-[9px] uppercase tracking-[0.24em] text-teal/40">
                Introduction
              </p>

            </div>

            {/* TEXT */}
            <div className="mt-5 space-y-4">

              <p className="text-[13px] leading-6 text-teal/75">
                I’m a Computer Science graduate from
                <span className="font-semibold text-teal">
                  {" "}Minhaj University Lahore
                </span>,
                building my journey around cybersecurity,
                AI,
                frontend engineering,
                and people-centered technology.
              </p>

              <p className="text-[13px] leading-6 text-teal/75">
                I’ve worked with international clients,
                explored secure systems,
                managed communication workflows,
                and continuously improved my technical
                and leadership skills.
              </p>

              <p className="text-[13px] leading-6 text-teal/75">
                Alongside technology,
                I’m passionate about HR operations,
                strategy,
                business growth,
                and secure digital experiences.
              </p>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-3"
          >

            {timeline.map((item) => (

              <div
                key={item.title}
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border border-gold/15
                  bg-white/88
                  p-4
                  shadow-soft
                  backdrop-blur-xl
                "
              >

                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-gold/10 blur-2xl" />

                {/* TOP */}
                <div className="flex items-start gap-3">

                  {/* DOT */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream shadow-sm">

                    <div
                      className={`h-3 w-3 rounded-full ${item.dot}`}
                    />

                  </div>

                  {/* CONTENT */}
                  <div>

                    <p className="mono text-[9px] uppercase tracking-[0.22em] text-teal/40">
                      {item.year}
                    </p>

                    <h3 className="mt-2 text-[1.05rem] font-semibold leading-tight text-teal">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-teal/70">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}