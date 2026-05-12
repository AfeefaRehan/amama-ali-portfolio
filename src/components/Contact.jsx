import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { contact } from "../data/portfolio";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const subject = form.get("subject") || contact.subject;
    const message = form.get("message") || "";

    const gmailUrl = new URL("https://mail.google.com/mail/");

    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", contact.email);
    gmailUrl.searchParams.set("su", subject);

    gmailUrl.searchParams.set(
      "body",
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream-deep/55 py-12 md:py-16"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect"
            subtitle="Available for collaborations, freelance projects, and opportunities."
          />

        </div>

        {/* MAIN GRID */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              rounded-[26px]
              border border-gold/20
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
                Contact Details
              </p>

            </div>

            <h3 className="mt-4 text-[1.9rem] leading-none font-semibold tracking-tight text-teal">
              Get in touch
            </h3>

            <p className="mt-3 max-w-sm text-[13px] leading-6 text-teal/70">
              Open Gmail instantly with your message ready to send.
            </p>

            {/* CONTACT ITEMS */}
            <div className="mt-6 space-y-3">

              {/* EMAIL */}
              <a
                href={`mailto:${contact.email}`}
                className="
                  flex items-center gap-3
                  rounded-[20px]
                  border border-teal/10
                  bg-cream/70
                  px-4 py-3
                  transition-all duration-300
                  hover:border-gold/25
                  hover:bg-white
                "
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold">
                  <Mail size={16} />
                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[0.14em] text-teal/45">
                    Email
                  </p>

                  <p className="mt-1 text-[14px] text-teal/80 break-all">
                    {contact.email}
                  </p>

                </div>

              </a>

              {/* PHONE */}
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="
                  flex items-center gap-3
                  rounded-[20px]
                  border border-teal/10
                  bg-cream/70
                  px-4 py-3
                  transition-all duration-300
                  hover:border-gold/25
                  hover:bg-white
                "
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold">
                  <Phone size={16} />
                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[0.14em] text-teal/45">
                    Phone
                  </p>

                  <p className="mt-1 text-[14px] text-teal/80">
                    {contact.phone}
                  </p>

                </div>

              </a>

              {/* LOCATION */}
              <div
                className="
                  flex items-center gap-3
                  rounded-[20px]
                  border border-teal/10
                  bg-cream/70
                  px-4 py-3
                "
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold">
                  <MapPin size={16} />
                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[0.14em] text-teal/45">
                    Location
                  </p>

                  <p className="mt-1 text-[14px] text-teal/80">
                    {contact.location}
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              rounded-[26px]
              border border-gold/20
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
                Send Message
              </p>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-3"
            >

              {/* TOP ROW */}
              <div className="grid gap-3 sm:grid-cols-2">

                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="
                    h-[50px]
                    w-full
                    rounded-[18px]
                    border border-teal/10
                    bg-cream/70
                    px-4
                    text-[14px]
                    text-teal
                    outline-none
                    transition
                    focus:border-gold/30
                  "
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="
                    h-[50px]
                    w-full
                    rounded-[18px]
                    border border-teal/10
                    bg-cream/70
                    px-4
                    text-[14px]
                    text-teal
                    outline-none
                    transition
                    focus:border-gold/30
                  "
                  required
                />

              </div>

              {/* SUBJECT */}
              <input
                name="subject"
                type="text"
                defaultValue={contact.subject}
                placeholder="Subject"
                className="
                  h-[50px]
                  w-full
                  rounded-[18px]
                  border border-teal/10
                  bg-cream/70
                  px-4
                  text-[14px]
                  text-teal
                  outline-none
                  transition
                  focus:border-gold/30
                "
                required
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="
                  w-full
                  resize-none
                  rounded-[22px]
                  border border-teal/10
                  bg-cream/70
                  px-4 py-4
                  text-[14px]
                  text-teal
                  outline-none
                  transition
                  focus:border-gold/30
                "
                required
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-teal
                  px-5 py-3
                  text-[13px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Open Gmail
                <Send size={15} />
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}