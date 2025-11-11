// Ron Penones | November 11th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  if (!card) return;


  const watchBtn = document.createElement("button");
  watchBtn.textContent = "🎥 Watch video";
  watchBtn.className = "watch-btn"; // Ito iyong ni-declared na id sa line 16 ng google_chrome_gpu.html

  // Mga kolorete para pak!
  watchBtn.style.padding = "12px 20px";
  watchBtn.style.fontSize = "16px";
  watchBtn.style.fontWeight = "600";
  watchBtn.style.border = "none";
  watchBtn.style.borderRadius = "10px";
  watchBtn.style.cursor = "pointer";
  watchBtn.style.background = "#1d72b8";
  watchBtn.style.color = "#fff";
  watchBtn.style.marginTop = "15px";

  // Kapag ni-click mo iyong "Watch video" ay magkakaroon ng redirection sa bagong page.
  watchBtn.addEventListener("click", () => {
    window.open( //gumamit ako ng https://rawcdn.githack.com kasi magbubukas ito ng panibagong static page.
    "https://rawcdn.githack.com/mobiledropbox/landing_pages_scripts/main/google_chrome_gpu_adjustments/playVideo.html",
    "_blank",
    "noopener,noreferrer"
    );
  });

  card.appendChild(watchBtn);
});
