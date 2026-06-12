import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import { getLocalizedPath, getMessages } from '../../lib/i18n';

const CTA = ({ lang = 'vi' }) => {
  const reduceMotion = useReducedMotion();
  const { goodworkCta } = getMessages(lang);
  const contactPath = `${getLocalizedPath(lang, 'home')}#contact`;

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? undefined : { duration: 0.64, ease: [0.16, 1, 0.3, 1] }}
          className="surface-panel overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
                {goodworkCta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                {goodworkCta.description}
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.evgoodwork&hl=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary focus-ring w-full justify-center text-sm sm:text-base"
              >
                {goodworkCta.primaryCta}
                <Download size={18} />
              </a>
              <a href={contactPath} className="button-secondary focus-ring w-full justify-center text-sm sm:text-base">
                {goodworkCta.secondaryCta}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
