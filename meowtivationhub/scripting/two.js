document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('viewtc7-disclaimer-btn');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    try {
      const res = await fetch(
        'https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/disable-built-in-laptop-mouse-trackpad-and-keyboard-in-ubuntu-linux/disclaimer.md'
      );

      if (!res.ok) throw new Error('Unable to load disclaimer.md');

      const text = await res.text();

      // ==== MODAL WRAPPER ====
      const modal = document.createElement('div');
      modal.className = 'disclaimer-modal';

      // ==== MODAL CONTENT ====
      const inner = document.createElement('div');
      inner.className = 'disclaimer-modal-content';

      const close = document.createElement('button');
      close.className = 'disclaimer-close-btn';
      close.textContent = '×';
      close.addEventListener('click', () => modal.remove());

      const content = document.createElement('div');
      content.className = 'disclaimer-text';
      content.innerHTML = marked.parse(text);

      inner.appendChild(close);
      inner.appendChild(content);
      modal.appendChild(inner);
      document.body.appendChild(modal);

    } catch (err) {
      console.error(err);
      alert('Error loading disclaimer.');
    }
  });
});
