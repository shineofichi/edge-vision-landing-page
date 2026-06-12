import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Download, Smartphone, Sparkles } from 'lucide-react';
import { getLocalizedPath, getMessages } from '../../lib/i18n';

const reveal = (reduceMotion, delay = 0) =>
  reduceMotion
    ? { initial: false }
    : {
        initial: false,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.26 },
        transition: {
          duration: 0.66,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      };

const Hero = ({ lang = 'vi' }) => {
  const reduceMotion = useReducedMotion();
  const { goodworkHero } = getMessages(lang);
  const contactPath = `${getLocalizedPath(lang, 'home')}#contact`;

  return (
    <section className="overflow-hidden pt-28 sm:pt-32">
      <div className="section-shell">
        <div className="grid min-h-[100dvh] items-center gap-10 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pb-20">
          <motion.div {...reveal(reduceMotion)} className="max-w-[38rem]">
            <span className="section-kicker">{goodworkHero.kicker}</span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.02] text-[var(--text)] sm:text-5xl lg:text-6xl">
              {goodworkHero.title}
            </h1>
            <p className="mt-6 max-w-[34rem] text-base leading-7 text-[var(--text-muted)] sm:text-lg">
              {goodworkHero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.evgoodwork&hl=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary focus-ring text-sm sm:text-base"
              >
                {goodworkHero.primaryCta}
                <Download size={18} />
              </a>
              <a href={contactPath} className="button-secondary focus-ring text-sm sm:text-base">
                {goodworkHero.secondaryCta}
              </a>
            </div>
          </motion.div>

          <motion.div
            {...reveal(reduceMotion, 0.08)}
            className="surface-panel overflow-hidden p-4 sm:p-5 lg:p-6"
          >
            <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="grid gap-4">
                {goodworkHero.highlights.map((item, index) => (
                  <motion.article
                    key={item}
                    {...reveal(reduceMotion, 0.12 + index * 0.06)}
                    className="surface-muted rounded-[22px] border border-[var(--line)] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                        {index === 0 ? <Smartphone size={20} /> : index === 1 ? <Sparkles size={20} /> : <BadgeCheck size={20} />}
                      </span>
                      <p className="text-sm font-semibold leading-6 text-[var(--text)]">{item}</p>
                    </div>
                  </motion.article>
                ))}

                <a
                  href="https://goodwork.io.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-strong)]"
                >
                  {goodworkHero.productSite}
                  <ArrowRight size={16} />
                </a>
              </div>

              <figure className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--surface-strong)]">
                <img
                  src="/imagery/operations.jpg"
                  alt={goodworkHero.imageAlt}
                  className="h-full min-h-[380px] w-full object-cover"
                />
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
