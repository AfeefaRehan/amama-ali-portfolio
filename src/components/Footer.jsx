import { footerLinks, contact } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f3d3b] text-cream">

      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">

        {/* MAIN */}
        <div className="grid gap-8 md:grid-cols-[1fr_0.8fr_0.8fr]">

          {/* LEFT */}
          <div>

            <h2 className="font-display text-[2rem] sm:text-[2.3rem] leading-none font-semibold text-white">
              Amama
              <span className="text-gold"> Ali.</span>
            </h2>

            <p className="mt-3 max-w-sm text-[14px] leading-6 text-cream/68">
              AI, cybersecurity & frontend focused professional building
              secure digital experiences with modern systems and elegant UI.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
              Quick Links
            </p>

            <div className="mt-4 grid grid-cols-2 gap-y-2.5">

              {footerLinks.map((link) => (

                <a
                  key={link.href}
                  href={link.href}
                  className="
                    text-[14px]
                    text-cream/72
                    transition duration-300
                    hover:text-gold
                  "
                >
                  {link.label}
                </a>

              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
              Contact
            </p>

            <div className="mt-4 space-y-3">

              {/* EMAIL */}
              <div>

                <p className="text-[10px] uppercase tracking-[0.18em] text-cream/38">
                  Email
                </p>

                <a
                  href={`mailto:${contact.email}`}
                  className="
                    mt-1 block
                    text-[14px]
                    text-cream/78
                    transition
                    hover:text-gold
                  "
                >
                  {contact.email}
                </a>

              </div>

              {/* PHONE */}
              <div>

                <p className="text-[10px] uppercase tracking-[0.18em] text-cream/38">
                  Phone
                </p>

                <a
                  href={`tel:${contact.phone}`}
                  className="
                    mt-1 block
                    text-[14px]
                    text-cream/78
                    transition
                    hover:text-gold
                  "
                >
                  {contact.phone}
                </a>

              </div>

              {/* LOCATION */}
              <div>

                <p className="text-[10px] uppercase tracking-[0.18em] text-cream/38">
                  Location
                </p>

                <p className="mt-1 text-[14px] text-cream/78">
                  {contact.location}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-3 sm:flex-row">

          <p className="mono text-[11px] tracking-[0.08em] text-cream/40">
            © 2026 Amama Ali. All rights reserved.
          </p>

          <a
            href="#home"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg
              border border-white/10
              bg-white/5
              text-sm text-cream
              transition-all duration-300
              hover:-translate-y-1
              hover:border-gold/30
              hover:text-gold
            "
          >
            ↑
          </a>

        </div>

      </div>

    </footer>
  );
}