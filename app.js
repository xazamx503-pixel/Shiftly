
(function () {
  const params = new URLSearchParams(location.search);
  const forced = params.get('lang');
  const lang = (forced === 'ar' || forced === 'en')
    ? forced
    : ((navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en');

  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
})();
