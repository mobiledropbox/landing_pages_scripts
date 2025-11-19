document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('viewtc7-disclaimer-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    openMarkdownModal(
      "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/disable-built-in-laptop-mouse-trackpad-and-keyboard-in-ubuntu-linux/disclaimer.md",
      "Disclaimer"
    );
  });
});


/*  
=========================================================
  UNIVERSAL MODAL LOADER FOR MARKDOWN (Donna-certified)
=========================================================
*/

async function openMarkdownModal(mdUrl, modalTitle = "") {
  try {
    const res = await fetch(mdUrl);
    if (!res.ok) throw new Error("Unable to load markdown file");

    const text = await res.text();

    // --- CREATE BACKDROP ---
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop active";

    // --- CREATE MODAL ---
    const modal = document.createElement("div");
    modal.className = "modal";

    // --- HEADER ---
    if (modalTitle) {
      const header = document.createElement("div");
      header.className = "modal-header";
      header.textContent = modalTitle;
      modal.appendChild(header);
    }

    // --- CLOSE BUTTON ---
    const closeBtn = document.createElement("button");
    closeBtn.className = "modal-close";
    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", () => backdrop.remove());

    // --- CONTENT ---
    const content = document.createElement("div");
    content.className = "modal-content";
    content.innerHTML = marked.parse(text);

    // Assemble modal
    modal.appendChild(content);
    modal.appendChild(closeBtn);
    backdrop.appendChild(modal);

    // Add to page
    document.body.appendChild(backdrop);

  } catch (err) {
    console.error(err);
    alert("Error loading markdown content.");
  }
}
