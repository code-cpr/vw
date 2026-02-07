const rosesContainer = document.querySelector(".roses");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("musicOverlay");

// Create floating roses
for (let i = 0; i < 20; i++) {
  const rose = document.createElement("span");
  rose.innerText = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = 8 + Math.random() * 8 + "s";
  rose.style.fontSize = 20 + Math.random() * 20 + "px";
  rosesContainer.appendChild(rose);
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
