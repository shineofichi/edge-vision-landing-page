import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Fingerprint, FileSpreadsheet, Headset, Users } from 'lucide-react';
import { getMessages } from '../../lib/i18n';

const reveal = (reduceMotion, delay = 0) =>
  reduceMotion
    ? { initial: false }
    : {
        initial: false,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.24 },
        transition: {
          duration: 0.64,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      };

const Features = ({ lang = 'vi' }) => {
  const reduceMotion = useReducedMotion();
  const { goodworkFeatures } = getMessages(lang);
  const features = [
    { icon: Users, span: 'md:col-span-2', tone: 'bg-[var(--accent-soft)]', ...goodworkFeatures.items[0] },
    { icon: Fingerprint, span: 'md:row-span-2', tone: 'bg-[var(--bg-elevated)]', ...goodworkFeatures.items[1] },
    { icon: FileSpreadsheet, span: '', tone: 'bg-[var(--bg-elevated)]', ...goodworkFeatures.items[2] },
    { icon: Headset, span: '', tone: 'bg-[var(--bg-elevated)]', ...goodworkFeatures.items[3] },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div {...reveal(reduceMotion)} className="max-w-3xl">
          <span className="section-kicker">{goodworkFeatures.kicker}</span>
          <h2 className="mt-6 text-3xl font-bold text-[var(--text)] sm:text-4xl lg:text-5xl">
            {goodworkFeatures.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            {goodworkFeatures.description}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon, span, tone }, index) => (
            <motion.article
              key={title}
              {...reveal(reduceMotion, 0.06 + index * 0.05)}
              className={`surface-panel ${span} overflow-hidden p-6 sm:p-7`}
            >
              <div className={`rounded-[22px] border border-[var(--line)] ${tone} p-5`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bg-elevated)] text-[var(--accent)] shadow-[var(--shadow-soft)]">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[var(--text)]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
