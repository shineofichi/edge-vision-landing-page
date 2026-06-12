import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { getMessages } from '../lib/i18n';

const reveal = (reduceMotion, delay = 0) =>
  reduceMotion
    ? { initial: false }
    : {
        initial: false,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.22 },
        transition: {
          duration: 0.64,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      };

const Team = ({ lang = 'vi' }) => {
  const reduceMotion = useReducedMotion();
  const { team } = getMessages(lang);
  const [featuredMember, ...otherMembers] = team.members;

  return (
    <section id="team" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <motion.div {...reveal(reduceMotion)} className="max-w-[32rem]">
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl lg:text-5xl">
              {team.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
              {team.description}
            </p>

            <div className="mt-8 space-y-3">
              {team.principles.map((item, index) => (
                <motion.div
                  key={item}
                  {...reveal(reduceMotion, 0.08 + index * 0.05)}
                  className="rounded-[22px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_78%,transparent)] px-5 py-4 text-sm font-semibold leading-6 text-[var(--text)] shadow-[var(--shadow-soft)]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <motion.article
              {...reveal(reduceMotion, 0.04)}
              className="surface-panel overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2"
            >
              <div className="grid h-full gap-5 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--surface-strong)]">
                  <img
                    src={featuredMember.img}
                    alt={featuredMember.name}
                    className="h-full min-h-[260px] w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--accent)]">
                    {team.featuredRoleLabel}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-[var(--text)]">
                    {featuredMember.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--text-muted)]">
                    {featuredMember.role}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-[var(--text-muted)]">
                    {team.featuredDescription}
                  </p>
                </div>
              </div>
            </motion.article>

            {otherMembers.map((member, index) => (
              <motion.article
                key={member.name}
                {...reveal(reduceMotion, 0.1 + index * 0.04)}
                className="surface-panel overflow-hidden p-4"
              >
                <div className="overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--surface-strong)]">
                  <img src={member.img} alt={member.name} className="h-52 w-full object-cover" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-[var(--text)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {member.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
