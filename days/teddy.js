const teddiesContainer = document.querySelector(".teddies");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("musicOverlay");

// Floating teddies 🧸
for (let i = 0; i < 22; i++) {
  const teddy = document.createElement("span");
  teddy.innerText = "🧸";
  teddy.style.left = Math.random() * 100 + "vw";
  teddy.style.animationDuration = 9 + Math.random() * 8 + "s";
  teddy.style.fontSize = 20 + Math.random() * 18 + "px";
  teddiesContainer.appendChild(teddy);
}

// Try autoplay
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
