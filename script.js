const teaseQuotes = [
  "Good things take time 🕰️❤️",
  "Patience looks cute on you 😉",
  "Not yet… but soon ✨",
  "Some surprises are worth the wait 💌",
  "Hey hey, no peeking 👀💕",
  "Timing is a love language ⏳❤️"
];

function openDay(month, day, url) {
  const today = new Date();
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const target = new Date(today.getFullYear(), month - 1, day);

  if (target > now) {
    const quote =
      teaseQuotes[Math.floor(Math.random() * teaseQuotes.length)];
    showPopup(quote);
  } else {
    window.location.href = url;
  }
}

function showPopup(text) {
  document.getElementById("popupText").innerText = text;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// Valentine reveal logic
const today = new Date();
const isValentine =
  today.getMonth() === 1 && today.getDate() === 14; // Feb = 1

if (isValentine) {
  document.getElementById("valentineReveal").classList.remove("hidden");
}

// Valentine redirect
function goValentine() {
  window.location.href = "days/valentine.html";
}
