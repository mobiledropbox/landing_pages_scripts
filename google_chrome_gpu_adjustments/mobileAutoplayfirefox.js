// Ron Penones | November 11th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!
// This script is specific for mozilla firefox browser autoplay issues.

document.addEventListener("DOMContentLoaded", function() {
    const vid = document.getElementById("mobileAutoplay");

    // Mag-attempt muna siya mag-autoplay assuming na hindi i-block ni Firefox.
    vid.play().catch(() => {
      // Kapag ni ni-block ni Firefox then iyong human viewer or iyong nanonood na ang may intent to play it.
      const resume = () => {
        vid.muted = true;
        vid.play();
        document.removeEventListener('touchstart', resume);
        document.removeEventListener('click', resume);
      };
      document.addEventListener('touchstart', resume);
      document.addEventListener('click', resume);
    });
  });
