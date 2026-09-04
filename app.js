(function(){
  const stored = localStorage.getItem('shiftly_lang');
  const initial = stored || ((navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en');
  apply(initial);

  window.toggleLang = function(){
    apply(document.documentElement.dataset.lang === 'ar' ? 'en' : 'ar');
  };

  function apply(lang){
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('shiftly_lang', lang);
    const btn = document.getElementById('langBtn');
    if (btn) btn.textContent = lang === 'ar' ? 'EN' : 'ع';
  }
})();
