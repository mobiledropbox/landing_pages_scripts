// Ron Penones | November 11th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

const vid = document.getElementById("mobileAutoplay");
    // Force autoplay attempt
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // fallback for iOS if autoplay fails
        vid.muted = true;
        vid.play();
      });
    }
  });
