// Ron Penones | November 11th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!
// Gumamit ako ng plyr.js.

import { videoUrl } from 'https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/google_chrome_gpu_adjustments/videoUrl.js';

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("player");

  // Sa background gumagawa ng source element.
  const source = document.createElement("source");
  source.src = videoUrl;
  source.type = "video/mp4";

  video.appendChild(source);

  // Dito po nag-initialize si Plyr after adding source.
  const player = new Plyr("#player", {
    controls: [
      'play-large', 'play', 'progress', 'current-time',
      'mute', 'volume', 'settings', 'fullscreen'
    ],
  });

  console.log("Video source loaded dynamically from videoUrl.js");
});
