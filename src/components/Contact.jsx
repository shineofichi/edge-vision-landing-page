import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Clock3, Mail, MapPin, Phone, Send, Shield } from 'lucide-react';
import { getMessages } from '../lib/i18n';

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

const initialStatus = 'idle';

const Contact = ({ lang = 'vi' }) => {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState(initialStatus);
  const { contact } = getMessages(lang);
  const contactDetails = [
    { icon: Mail, ...contact.details[0] },
    { icon: Phone, ...contact.details[1] },
    { icon: MapPin, ...contact.details[2] },
  ];
  const supportFlow = [
    { icon: Clock3, ...contact.supportFlow[0] },
    { icon: Shield, ...contact.supportFlow[1] },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/support@edgevision.io.vn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      event.target.reset();
      setStatus('success');
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <motion.div {...reveal(reduceMotion)} className="surface-panel p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">{contact.title}</h2>
            <p className="mt-5 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
              {contact.description}
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map(({ icon: Icon, title, content }, index) => (
                <motion.div
                  key={title}
                  {...reveal(reduceMotion, 0.08 + index * 0.05)}
                  className="rounded-[22px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_78%,transparent)] p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--accent)]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--text)]">{content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-4">
              {supportFlow.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  {...reveal(reduceMotion, 0.14 + index * 0.06)}
                  className="rounded-[22px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_78%,transparent)] p-5"
                >
                  <div className="flex items-center gap-3 text-[var(--accent)]">
                    <Icon size={18} />
                    <h3 className="text-sm font-bold">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal(reduceMotion, 0.06)} className="surface-panel relative overflow-hidden p-6 sm:p-8">
            <AnimatePresence>
              {status === 'success' ? (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? {} : { opacity: 0, y: -12 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[color-mix(in_srgb,var(--bg-elevated)_92%,transparent)] px-6 text-center backdrop-blur-xl"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--text)]">{contact.successTitle}</h3>
                  <p className="max-w-md text-sm leading-6 text-[var(--text-muted)]">
                    {contact.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus(initialStatus)}
                    className="button-secondary focus-ring text-sm"
                  >
                    {contact.successButton}
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="max-w-2xl">
              <h3 className="text-xl font-bold text-[var(--text)] sm:text-2xl">{contact.formTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                {contact.formDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input type="hidden" name="_subject" value={contact.subject} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--text)]">{contact.nameLabel}</span>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={status === 'sending'}
                    placeholder={contact.namePlaceholder}
                    className="focus-ring w-full rounded-[20px] border border-[var(--line-strong)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[color:var(--text-muted)]/80 disabled:cursor-not-allowed disabled:opacity-65"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--text)]">{contact.emailLabel}</span>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === 'sending'}
                    placeholder={contact.emailPlaceholder}
                    className="focus-ring w-full rounded-[20px] border border-[var(--line-strong)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[color:var(--text-muted)]/80 disabled:cursor-not-allowed disabled:opacity-65"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[var(--text)]">{contact.messageLabel}</span>
                <textarea
                  name="message"
                  rows="6"
                  required
                  disabled={status === 'sending'}
                  placeholder={contact.messagePlaceholder}
                  className="focus-ring w-full rounded-[24px] border border-[var(--line-strong)] bg-[var(--bg-elevated)] px-4 py-3 text-sm leading-6 text-[var(--text)] placeholder:text-[color:var(--text-muted)]/80 disabled:cursor-not-allowed disabled:opacity-65"
                />
              </label>

              {status === 'error' ? (
                <div className="flex items-start gap-3 rounded-[20px] border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  <p>{contact.errorMessage}</p>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="button-primary focus-ring w-full text-sm sm:w-auto"
              >
                {status === 'sending' ? contact.submitSending : contact.submitIdle}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
