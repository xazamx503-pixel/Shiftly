
(function () {
  const params = new URLSearchParams(location.search);
  const forced = params.get('lang');
  const saved = localStorage.getItem('shiftly_web_lang');

  let lang;
  if (forced === 'ar' || forced === 'en') {
    lang = forced;
  } else if (saved === 'ar' || saved === 'en') {
    lang = saved;
  } else {
    lang = (navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
  }

  function styleLanguageButton(btn) {
    btn.style.width = '40px';
    btn.style.height = '40px';
    btn.style.borderRadius = '20px';
    btn.style.border = '.5px solid var(--border)';
    btn.style.background = 'var(--card)';
    btn.style.color = 'var(--foreground)';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    btn.style.fontSize = '11px';
    btn.style.lineHeight = '16px';
    btn.style.fontWeight = '600';
    btn.style.padding = '0';
    btn.style.cursor = 'pointer';
  }

  function installLanguageButton() {
    document.querySelectorAll('.headerSpacer').forEach(function (spacer) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('data-lang-toggle', 'true');
      btn.addEventListener('click', function () {
        apply(document.documentElement.dataset.lang === 'ar' ? 'en' : 'ar');
      });
      btn.addEventListener('pointerdown', function () {
        btn.style.opacity = '0.7';
      });
      btn.addEventListener('pointerup', function () {
        btn.style.opacity = '1';
      });
      btn.addEventListener('pointercancel', function () {
        btn.style.opacity = '1';
      });
      styleLanguageButton(btn);
      spacer.replaceWith(btn);
    });
  }

  function apply(next) {
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('shiftly_web_lang', next);

    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.textContent = next === 'ar' ? 'EN' : 'ع';
      btn.setAttribute(
        'aria-label',
        next === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'
      );
    });
  }

  installLanguageButton();
  apply(lang);
})();
