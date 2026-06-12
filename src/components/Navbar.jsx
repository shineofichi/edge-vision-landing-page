import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { getLocalizedPath, getMessages, languageOptions } from '../lib/i18n';

const menuTransition = {
  duration: 0.24,
  ease: [0.16, 1, 0.3, 1],
};

const Navbar = ({ lang = 'vi', pageKey = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { navbar } = getMessages(lang);
  const homePath = getLocalizedPath(lang, 'home');
  const navLinks = [
    { name: navbar.links[0].name, href: homePath },
    { name: navbar.links[1].name, href: `${homePath}#products` },
    { name: navbar.links[2].name, href: `${homePath}#team` },
    { name: navbar.links[3].name, href: `${homePath}#contact` },
  ];
  const languageLinks = languageOptions.map((option) => ({
    ...option,
    href: getLocalizedPath(option.code, pageKey),
    isActive: option.code === lang,
  }));

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 18);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6">
      <motion.nav
        animate={{
          borderColor: isScrolled ? 'var(--line-strong)' : 'var(--line)',
          backgroundColor: isScrolled
            ? 'color-mix(in srgb, var(--bg-elevated) 82%, transparent)'
            : 'color-mix(in srgb, var(--bg-elevated) 58%, transparent)',
          boxShadow: isScrolled ? 'var(--shadow-soft)' : 'none',
          y: 0,
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between rounded-full border px-4 backdrop-blur-xl sm:px-6"
      >
        <a
          href={homePath}
          className="focus-ring flex items-center gap-3 rounded-full"
          aria-label="Edge Vision"
        >
          <img src="/ev-logo.svg" alt="Edge Vision" className="h-10 w-10 rounded-full bg-white/80 p-1" />
          <div className="min-w-0">
            <div className="font-display text-base font-bold text-[var(--text)] sm:text-lg">Edge Vision</div>
            <p className="hidden text-xs text-[var(--text-muted)] sm:block">{navbar.brandTagline}</p>
          </div>
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="focus-ring rounded-full px-1 py-1 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className="flex items-center rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_74%,transparent)] p-1"
            aria-label={navbar.languageLabel}
          >
            {languageLinks.map((option) => {
              const isActive = option.isActive;

              return (
                <a
                  key={option.code}
                  href={option.href}
                  className={`focus-ring rounded-full px-3 py-2 text-xs font-bold ${
                    isActive
                      ? 'bg-[var(--accent)] text-white'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {option.label}
                </a>
              );
            })}
          </div>

          <a href={`${homePath}#contact`} className="button-primary focus-ring text-sm">
            {navbar.cta}
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--text)] lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? navbar.closeMenu : navbar.openMenu}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={menuTransition}
            className="section-shell surface-panel mt-3 overflow-hidden px-5 py-5 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="focus-ring rounded-2xl px-4 py-3 text-base font-semibold text-[var(--text)] hover:bg-[var(--accent-soft)]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2">
              {languageLinks.map((option) => {
                const isActive = option.isActive;

                return (
                  <a
                    key={option.code}
                    href={option.href}
                    className={`focus-ring rounded-full px-3 py-2 text-xs font-bold ${
                      isActive
                        ? 'bg-[var(--accent)] text-white'
                        : 'border border-[var(--line)] text-[var(--text-muted)]'
                    }`}
                  >
                    {option.label}
                  </a>
                );
              })}
            </div>
            <a
              href={`${homePath}#contact`}
              className="button-primary focus-ring mt-5 w-full text-sm"
              onClick={() => setIsOpen(false)}
            >
              {navbar.cta}
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
