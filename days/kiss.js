const kissesContainer = document.querySelector(".kisses");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("musicOverlay");

// Floating kiss elements 💋🤍
const kissIcons = ["💋", "🤍"];

for (let i = 0; i < 14; i++) {
  const kiss = document.createElement("span");
  kiss.innerText = kissIcons[Math.floor(Math.random() * kissIcons.length)];
  kiss.style.left = Math.random() * 100 + "vw";
  kiss.style.animationDuration = 18 + Math.random() * 12 + "s";
  kiss.style.fontSize = 16 + Math.random() * 12 + "px";
  kissesContainer.appendChild(kiss);
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
