const hugsContainer = document.querySelector(".hugs");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("musicOverlay");

// Floating hug elements 🤗🤍
const hugIcons = ["🤗", "🤍"];

for (let i = 0; i < 16; i++) {
  const hug = document.createElement("span");
  hug.innerText = hugIcons[Math.floor(Math.random() * hugIcons.length)];
  hug.style.left = Math.random() * 100 + "vw";
  hug.style.animationDuration = 16 + Math.random() * 10 + "s";
  hug.style.fontSize = 18 + Math.random() * 14 + "px";
  hugsContainer.appendChild(hug);
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
