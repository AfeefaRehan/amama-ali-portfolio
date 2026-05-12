import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');

  /* SCROLL + ACTIVE SECTION */
  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((item) =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 180;

      sections.forEach((section) => {

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(`#${section.id}`);
        }

      });

    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (

    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 lg:px-6">

      <div
        className={`
          mx-auto max-w-7xl
          transition-all duration-300

          ${
            scrolled
              ? 'pt-1.5'
              : 'pt-2.5'
          }
        `}
      >

        {/* NAVBAR */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55 }}
          className={`
            relative flex items-center justify-between
            border border-white/30
            transition-all duration-300

            ${
              scrolled
                ? `
                  rounded-[1.3rem]
                  bg-white/88
                  backdrop-blur-2xl
                  px-3 sm:px-5
                  py-2
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                `
                : `
                  rounded-[1.8rem]
                  bg-white/76
                  backdrop-blur-xl
                  px-4 sm:px-5
                  py-2.5
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                `
            }
          `}
        >

          {/* LEFT */}
          <div className="flex items-center gap-3">

            {/* LOGO */}
            <div
              className={`
                flex items-center justify-center
                rounded-full bg-teal
                text-white font-semibold
                transition-all duration-300

                ${
                  scrolled
                    ? 'w-9 h-9 text-base'
                    : 'w-10 h-10 sm:w-12 sm:h-12 text-lg'
                }
              `}
            >
              A
            </div>

            {/* TEXT */}
            <div className="leading-none">

              <h1
                className={`
                  font-display font-semibold tracking-tight text-teal
                  transition-all duration-300

                  ${
                    scrolled
                      ? 'text-[1.35rem]'
                      : 'text-[1.4rem] sm:text-[1.9rem]'
                  }
                `}
              >
                Amama Ali
              </h1>

              <p className="mt-1 mono text-[8px] sm:text-[10px] uppercase tracking-[0.35em] text-teal/40">
                Portfolio
              </p>

            </div>

          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2">

            {navLinks.map((link) => {

              const isActive = activeSection === link.href;

              return (

                <a
                  key={link.name}
                  href={link.href}
                  className={`
                    relative rounded-full
                    px-4 py-2.5
                    text-[14px] font-medium
                    transition-all duration-300

                    ${
                      isActive
                        ? `
                          bg-mint/55
                          text-teal
                          shadow-sm
                        `
                        : `
                          text-teal/82
                          hover:bg-mint/30
                          hover:text-teal
                        `
                    }
                  `}
                >
                  {link.name}
                </a>

              );

            })}

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* CONTACT BTN */}
            <a
              href="#contact"
              className={`
                hidden sm:inline-flex items-center gap-2
                rounded-full
                bg-gold
                font-medium text-teal
                transition-all duration-300
                hover:scale-[1.03]

                ${
                  scrolled
                    ? 'px-4 py-2 text-sm'
                    : 'px-5 py-2.5 text-sm'
                }
              `}
            >
              Contact Me
              <ArrowUpRight size={15} />
            </a>

            {/* MOBILE BTN */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex lg:hidden items-center justify-center
                w-10 h-10 rounded-full
                border border-teal/10
                bg-white/90
                text-teal
                shadow-sm
                transition hover:scale-105
              "
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>

        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="
                mt-2 overflow-hidden
                rounded-[1.8rem]
                border border-white/40
                bg-white/82
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(27,69,67,0.10)]
                lg:hidden
              "
            >

              <div className="relative p-5">

                {/* GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,190,111,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(179,208,198,0.20),transparent_35%)]" />

                <div className="relative z-10">

                  {/* TOP */}
                  <div className="mb-5">

                    <p className="mono text-[10px] uppercase tracking-[0.35em] text-gold">
                      Navigation
                    </p>

                    <h2 className="mt-2 font-display text-[1.55rem] leading-none text-teal">
                      Explore Portfolio
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-teal/65">
                      AI, frontend, cybersecurity & business expertise.
                    </p>

                  </div>

                  {/* LINKS */}
                  <div className="space-y-2">

                    {navLinks.map((link, index) => {

                      const isActive = activeSection === link.href;

                      return (

                        <motion.a
                          key={link.name}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`
                            group flex items-center justify-between
                            rounded-2xl border
                            px-4 py-3.5
                            transition-all duration-300

                            ${
                              isActive
                                ? `
                                  border-mint/40
                                  bg-mint/30
                                `
                                : `
                                  border-teal/8
                                  bg-white/65
                                  hover:border-mint/30
                                  hover:bg-mint/15
                                `
                            }
                          `}
                        >

                          <span
                            className={`
                              text-[15px] font-medium

                              ${
                                isActive
                                  ? 'text-teal'
                                  : 'text-teal/90'
                              }
                            `}
                          >
                            {link.name}
                          </span>

                          <ArrowUpRight
                            size={16}
                            className={`
                              transition

                              ${
                                isActive
                                  ? 'text-teal'
                                  : 'text-teal/40 group-hover:text-teal'
                              }
                            `}
                          />

                        </motion.a>

                      );

                    })}

                  </div>

                  {/* BUTTON */}
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="
                      mt-5 inline-flex w-full
                      items-center justify-center gap-2
                      rounded-full
                      bg-gold
                      px-5 py-3.5
                      text-sm font-medium text-teal
                      transition hover:scale-[1.01]
                    "
                  >
                    Contact Me
                    <ArrowUpRight size={16} />
                  </a>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </header>
  );
}