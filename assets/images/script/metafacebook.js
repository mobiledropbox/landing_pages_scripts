// Ron Penones | November 12th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

(function () {
   // Palitan mo lang if may bagong CDN link.
  const FB_IMG_URL = 'https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/assets/images/metafacebook.jpg';
  const FALLBACK = FB_IMG_URL; // fallback same image pero optional lang.

  function setSrc(imgEl, url) {
    if (!imgEl) return;
    imgEl.src = url;
    imgEl.onerror = function () {
      this.src = FALLBACK;
    };
  }

  function init() {
    const el = document.getElementById('fb-img');
    setSrc(el, FB_IMG_URL);
  }

  // DOM ready check
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
