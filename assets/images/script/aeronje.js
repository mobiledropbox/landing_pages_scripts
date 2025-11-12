// Ron Penones | November 12th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

(function(){
  // Sa baba po ilalagay iyong url ng picture niyo at ikaw bahala kung 1x1 or 2x2 ba iyan or whole body wala akong pake.
  const AUTHOR_IMG_URL = 'https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/assets/images/aeronje.jpg';
  const FALLBACK = 'https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/assets/images/aeronje.jpg'; // Wala naman ako i-fo-fallback so iyan pa rin ang picture dapat.

  function setSrc(imgEl, url) {
    if (!imgEl) return;
    imgEl.src = url;
    imgEl.onerror = function() { this.src = FALLBACK; };
  }

  function init() {
    const el = document.getElementById('author-img');
    setSrc(el, AUTHOR_IMG_URL);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
