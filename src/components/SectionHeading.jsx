import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className={`flex flex-col gap-3 ${alignClass}`}
    >
      {eyebrow ? (
        <span className="mono text-[11px] uppercase tracking-[0.34em] text-teal/70">{eyebrow}</span>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-teal md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm leading-7 text-teal/75 md:text-base">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
