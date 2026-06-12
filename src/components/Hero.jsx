import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Orbit, ShieldCheck, Waypoints } from 'lucide-react';
import { getMessages } from '../lib/i18n';

const reveal = (reduceMotion, delay = 0) =>
  reduceMotion
    ? { initial: false }
    : {
        initial: false,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: {
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      };

const Hero = ({ lang = 'vi' }) => {
  const reduceMotion = useReducedMotion();
  const { hero } = getMessages(lang);
  const signals = [
    { icon: ShieldCheck, ...hero.signals[0] },
    { icon: Orbit, ...hero.signals[1] },
    { icon: Waypoints, ...hero.signals[2] },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="section-shell">
        <div className="grid min-h-[100dvh] items-center gap-10 pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pb-20">
          <motion.div {...reveal(reduceMotion)} className="max-w-[38rem]">
            <span className="section-kicker">{hero.kicker}</span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.02] text-[var(--text)] sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-[34rem] text-base leading-7 text-[var(--text-muted)] sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#products" className="button-primary focus-ring text-sm sm:text-base">
                {hero.primaryCta}
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="button-secondary focus-ring text-sm sm:text-base">
                {hero.secondaryCta}
              </a>
            </div>
          </motion.div>

          <motion.div
            {...reveal(reduceMotion, 0.08)}
            className="surface-panel overflow-hidden p-4 sm:p-5 lg:p-6"
          >
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <figure className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--surface-strong)]">
                <img
                  src="/imagery/hero-enterprise.jpg"
                  alt={hero.heroAlt}
                  className="h-full min-h-[340px] w-full object-cover"
                />
              </figure>
              <div className="grid gap-4">
                {signals.map(({ icon: Icon, title, body }, index) => (
                  <motion.article
                    key={title}
                    {...reveal(reduceMotion, 0.12 + index * 0.06)}
                    className="surface-muted rounded-[22px] border border-[var(--line)] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                        <Icon size={20} />
                      </span>
                      <h2 className="text-base font-bold text-[var(--text)]">{title}</h2>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{body}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...reveal(reduceMotion, 0.1)}
          className="surface-panel mb-8 grid gap-4 px-5 py-5 sm:px-6 lg:grid-cols-3 lg:px-8"
        >
          {hero.operatingModes.map((item) => (
            <div key={item} className="rounded-[22px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_75%,transparent)] px-5 py-5">
              <p className="text-sm font-semibold leading-6 text-[var(--text)]">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
