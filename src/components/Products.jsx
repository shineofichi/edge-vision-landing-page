import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Blocks, Building2, Cpu, ShieldCheck } from 'lucide-react';
import { getLocalizedPath, getMessages } from '../lib/i18n';

const reveal = (reduceMotion, delay = 0) =>
  reduceMotion
    ? { initial: false }
    : {
        initial: false,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: {
          duration: 0.64,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      };

const Products = ({ lang = 'vi' }) => {
  const reduceMotion = useReducedMotion();
  const { products } = getMessages(lang);
  const goodworkPath = getLocalizedPath(lang, 'goodwork');
  const productCards = [
    { icon: Building2, href: '#contact', ...products.sideCards[0] },
    { icon: ShieldCheck, href: '#contact', ...products.sideCards[1] },
  ];

  return (
    <section id="products" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div {...reveal(reduceMotion)} className="max-w-3xl">
          <span className="section-kicker">{products.kicker}</span>
          <h2 className="mt-6 text-3xl font-bold text-[var(--text)] sm:text-4xl lg:text-5xl">
            {products.title}
          </h2>
          <p className="mt-5 max-w-[43rem] text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            {products.description}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            {...reveal(reduceMotion, 0.04)}
            className="surface-panel overflow-hidden p-5 sm:p-6"
          >
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <figure className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--surface-strong)]">
                <img
                  src="/imagery/operations.jpg"
                  alt={products.featureAlt}
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </figure>
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 text-[var(--accent)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                      <Blocks size={20} />
                    </span>
                    <span className="text-sm font-semibold">{products.featuredLabel}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-[var(--text)] sm:text-3xl">{products.featuredTitle}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
                    {products.featuredDescription}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {products.featuredPoints.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-[22px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_80%,transparent)] p-4"
                    >
                      <h4 className="text-sm font-bold text-[var(--text)]">{point.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{point.body}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={goodworkPath} className="button-primary focus-ring text-sm">
                    {products.featuredPrimaryCta}
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="https://goodwork.io.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary focus-ring text-sm"
                  >
                    {products.featuredSecondaryCta}
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-6">
            {productCards.map(({ title, description, icon: Icon, points, href, cta }, index) => (
              <motion.article
                key={title}
                {...reveal(reduceMotion, 0.12 + index * 0.06)}
                className="surface-panel flex h-full flex-col justify-between p-6"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-[var(--text)]">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
                </div>

                <div className="mt-6 space-y-3">
                  {points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[20px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_80%,transparent)] px-4 py-3 text-sm font-medium text-[var(--text)]"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <a href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-strong)]">
                  {cta}
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          {...reveal(reduceMotion, 0.1)}
          className="surface-panel mt-6 grid gap-4 px-5 py-5 sm:px-6 lg:grid-cols-3"
        >
          {products.bottomCards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-[22px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_75%,transparent)] p-5"
            >
              {index === 0 ? (
                <div className="flex items-center gap-3 text-[var(--accent)]">
                  <Cpu size={18} />
                  <h3 className="text-sm font-bold">{card.title}</h3>
                </div>
              ) : (
                <h3 className="text-sm font-bold text-[var(--accent)]">{card.title}</h3>
              )}
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{card.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
