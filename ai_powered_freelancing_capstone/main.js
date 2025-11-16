// Ron Penones | November 16th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon! */

const buttons = [
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/dayone.md" },
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/daytwo.md" },
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/daythree.md" },
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/dayfour.md" },
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/dayfive.md" },
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/daysix.md" },
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/dayseven.md" },
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/dayeight.md" },
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/daynine.md" },
  { id: "downloadBtn1", file: "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/ai_powered_freelancing_capstone/dayten.md" }
];

const overlay = document.getElementById("dialogOverlay");
const box = document.getElementById("dialogBox");

// Add close button dynamically every time (cleaner)
function closeDialog() {
  overlay.style.display = "none";
  box.style.display = "none";
  box.innerHTML = ""; // clear content for next open
}

overlay.addEventListener("click", closeDialog);

buttons.forEach(btn => {
  const buttonElement = document.getElementById(btn.id);

  if (!buttonElement) {
    console.error(`Button ${btn.id} not found`);
    return;
  }

  buttonElement.addEventListener("click", () => {
    fetch(btn.file)
      .then(res => res.text())
      .then(md => {
        const htmlContent = marked.parse(md);
        box.innerHTML = `
          <span id="dialogClose" style="
            float:right; font-size:20px; cursor:pointer; font-weight:bold;
          ">&times;</span>
          ${htmlContent}
        `;

        document.getElementById("dialogClose").onclick = closeDialog;

        overlay.style.display = "block";
        box.style.display = "block";
      })
      .catch(err => console.error("Error loading MD:", err));
  });
});
