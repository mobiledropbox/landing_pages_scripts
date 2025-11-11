// Ron Penones | November 11th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

import { videoUrl } from "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/google_chrome_gpu_adjustments/videoUrl.js";

document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("watch-btn-container"); // Ito iyong class na declared sa google_chrome_gpu.html
  if (!container) return;

  // Dito po ginagawa in the background iyong watch button.
  const watchBtn = document.createElement("button");
  watchBtn.textContent = "🎥 Watch video";
  watchBtn.className = "watch-btn";

  // Kolorete pampa-arte tangina!
  Object.assign(watchBtn.style, {
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    background: "#1d72b8",
    color: "#fff",
    marginTop: "15px",
    transition: "background 0.3s ease, transform 0.2s ease"
  });

  // Kolorete ulit pak!
  watchBtn.addEventListener("mouseenter", () => {
    watchBtn.style.background = "#155d8b";
    watchBtn.style.transform = "scale(1.05)";
  });

  watchBtn.addEventListener("mouseleave", () => {
    watchBtn.style.background = "#1d72b8";
    watchBtn.style.transform = "scale(1)";
  });

  // Dito nire-redirect para mapanood iyong video as long na iyong url na declared sa videoUrl.js ay valid and publicly accessible.
  watchBtn.addEventListener("click", () => {
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  });

  container.appendChild(watchBtn);
});
