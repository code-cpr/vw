const heartsContainer = document.querySelector(".hearts");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("musicOverlay");

// Subtle floating hearts 🤍
for (let i = 0; i < 15; i++) {
  const heart = document.createElement("span");
  heart.innerText = "🤍";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 14 + Math.random() * 10 + "s";
  heart.style.fontSize = 14 + Math.random() * 10 + "px";
  heartsContainer.appendChild(heart);
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
