const music = document.getElementById("bgMusic");
const overlay = document.getElementById("musicOverlay");

// Attempt autoplay
window.onload = () => {
  music.play().then(() => {
    overlay.classList.add("hidden");
  }).catch(() => {
    overlay.classList.remove("hidden");
  });
};

function startMusic() {
  music.play();
  overlay.classList.add("hidden");
}
