(() => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mmenu');
  const main = document.querySelector('main');
  const desktop = matchMedia('(min-width: 861px)');

  const syncMenu = () => {
    const open = document.body.classList.contains('menu-open');
    const wasOpen = burger.getAttribute('aria-expanded') === 'true';
    const focusWasInMenu = menu.contains(document.activeElement);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? burger.dataset.close : burger.dataset.open);
    menu.inert = !open;
    main.inert = open;
    if (open && !wasOpen) menu.querySelector('a')?.focus();
    if (!open && wasOpen && focusWasInMenu) burger.focus();
  };

  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    syncMenu();
  };
  new MutationObserver(syncMenu).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  desktop.addEventListener('change', closeMenu);
  addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) closeMenu();
  });

  // Preserve deep links while the motion script handles the scroll itself.
  addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor || !event.defaultPrevented) return;
    syncMenu();
    if (location.hash !== anchor.hash) history.pushState(null, '', anchor.hash);
    const target = document.getElementById(anchor.hash.slice(1));
    if (event.detail === 0 && target) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  });

  const form = document.getElementById('contact-form');
  const submit = form.querySelector('button[type=submit]');
  const status = form.querySelector('[role=status]');
  const idleLabel = submit.textContent;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submit.disabled) return;

    const data = Object.fromEntries(new FormData(form));
    const endpoint = new URL(form.action);
    endpoint.pathname = '/ajax' + endpoint.pathname;
    submit.disabled = true;
    submit.textContent = form.dataset.sending;
    status.textContent = '';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || result.success === false || result.success === 'false') throw new Error('Form request failed');

      form.reset();
      status.dataset.state = 'success';
      status.textContent = form.dataset.success + '. ' + form.dataset.successBody;
    } catch {
      status.dataset.state = 'error';
      status.textContent = form.dataset.error;
    } finally {
      submit.disabled = false;
      submit.textContent = idleLabel;
    }
  });
})();
