const chocolatesContainer = document.querySelector(".chocolates");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("musicOverlay");

// Floating chocolates 🍫
for (let i = 0; i < 22; i++) {
  const choco = document.createElement("span");
  choco.innerText = "🍫";
  choco.style.left = Math.random() * 100 + "vw";
  choco.style.animationDuration = 8 + Math.random() * 8 + "s";
  choco.style.fontSize = 18 + Math.random() * 18 + "px";
  chocolatesContainer.appendChild(choco);
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
