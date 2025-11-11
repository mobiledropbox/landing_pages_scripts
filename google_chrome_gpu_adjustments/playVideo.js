// Ron Penones | November 11th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!
// Gumamit ako ng plyr.js.

document.addEventListener("DOMContentLoaded", () => {
  const playerElement = document.getElementById("player");
  if (!playerElement) return;

  const player = new Plyr(playerElement, {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "fullscreen",
      "pip",
      "settings"
    ],
    settings: ["speed"],
    ratio: "16:9"
  });
});
