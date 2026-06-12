import React from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { getLocalizedPath, getMessages, siteConfig } from '../lib/i18n';

const Footer = ({ lang = 'vi' }) => {
  const { footer } = getMessages(lang);
  const homePath = getLocalizedPath(lang, 'home');
  const footerLinks = [
    { name: footer.links[0].name, href: getLocalizedPath(lang, 'goodwork') },
    { name: footer.links[1].name, href: `${homePath}#products` },
    { name: footer.links[2].name, href: `${homePath}#team` },
    { name: footer.links[3].name, href: `${homePath}#contact` },
  ];

  return (
    <footer className="pb-8 pt-6 sm:pb-10">
      <div className="section-shell">
        <div className="surface-panel grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.95fr_0.55fr_0.5fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <img src="/ev-logo.svg" alt="Edge Vision" className="h-11 w-11 rounded-full bg-white/80 p-1" />
              <div>
                <h2 className="text-xl font-bold text-[var(--text)]">Edge Vision</h2>
                <p className="text-sm text-[var(--text-muted)]">{footer.brandLine}</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--text-muted)]">
              {footer.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="button-secondary focus-ring text-sm"
              >
                {siteConfig.supportEmail}
              </a>
              <a href={`${homePath}#contact`} className="button-primary focus-ring text-sm">
                {footer.cta}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--accent)]">{footer.navTitle}</h3>
            <div className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)]"
                >
                  {link.name}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--accent)]">{footer.connectTitle}</h3>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--bg-elevated)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--bg-elevated)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Edge Vision. {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
