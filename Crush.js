// ================================
// 🔧 DITO MO PALITAN ANG MGA TEXT
// ================================

const TEXT_QUESTION_1 = "Crush Mo Ako?";
const TEXT_QUESTION_2 = "💘 ";

// --- Pagkatapos pindutin ng OO ---
const TEXT_YES_Q1 = "Crush Mo Pala Ako Eh 🥹";
const TEXT_YES_Q2 = "Crush Din Kita!";
const TEXT_YES_STORY = 
  "Noong Akala Ko Wala Akong Pag-Asa Sayo Pero Meron Pala.\n\n" +
  "5year Nakitang Crush Salamat Sinagot Muna ako.\" 💕";

// --- Buttons ---
const TEXT_YES_BTN = "Oo";
const TEXT_NO_BTN = "Hindi";

// ================================
// (huwag na baguhin pababa nito)
// ================================

const question = document.querySelectorAll(".question")[0];
const secondQuestion = document.querySelectorAll(".question")[1];
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const storyBox = document.getElementById("storyBox");
const btnGroup = document.querySelector(".btn-group");

question.innerHTML = TEXT_QUESTION_1;
secondQuestion.innerHTML = TEXT_QUESTION_2;
yesBtn.innerHTML = TEXT_YES_BTN;
noBtn.innerHTML = TEXT_NO_BTN;

function playClickSound(type = "yes") {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = type === "yes" ? 880 : 440;
  gain.gain.setValueAtTime(0.15, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.2);
}

// ---------- OO ----------
yesBtn.addEventListener("click", () => {
  playClickSound("yes");
  question.innerHTML = TEXT_YES_Q1;
  secondQuestion.innerHTML = TEXT_YES_Q2;
  img.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png";
  btnGroup.style.display = "none";
  storyBox.innerHTML = TEXT_YES_STORY;
  storyBox.classList.add("show");
});

// ---------- HINDI — laging tatakbo/lilipat, hindi na deretso mag-tsutrigger ng story ----------
noBtn.addEventListener("mouseover", runAway);
noBtn.addEventListener("touchstart", runAway, { passive: true });
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playClickSound("no");
  runAway();
});

function runAway() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// ---------- Floating hearts background ----------
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 16 + 12) + "px";
  heart.style.animationDuration = (Math.random() * 4 + 4) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

// ---------- Falling leaves ----------
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
  leaf.innerHTML = "🍃";
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.fontSize = (Math.random() * 14 + 16) + "px";
  leaf.style.animationDuration = (Math.random() * 4 + 5) + "s";
  document.body.appendChild(leaf);

  setTimeout(() => leaf.remove(), 10000);
}

setInterval(createLeaf, 600);

setInterval(createHeart, 400);
