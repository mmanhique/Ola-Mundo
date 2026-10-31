const greetings = [
  { text: "Olá, Mundo! 🌍", subtitle: "Em Português — Bem-vindo ao seu projeto!" },
  { text: "Hello, World! 🌎", subtitle: "In English — Welcome to your project!" },
  { text: "¡Hola, Mundo! 💃", subtitle: "En Español — ¡Bienvenido a tu proyecto!" },
  { text: "Bonjour, le Monde! 🥐", subtitle: "En Français — Bienvenue dans votre projet !" },
  { text: "Ciao, Mondo! 🍕", subtitle: "In Italiano — Benvenuto nel tuo progetto!" },
  { text: "こんにちは世界！ 🗾", subtitle: "日本語 — プロジェクトへようこそ！" }
];

let currentIndex = 0;

const greetingEl = document.getElementById("greeting");
const subtitleEl = document.getElementById("subtitle");
const changeGreetingBtn = document.getElementById("changeGreetingBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");

changeGreetingBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % greetings.length;
  const item = greetings[currentIndex];

  greetingEl.style.opacity = "0";
  greetingEl.style.transform = "translateY(-6px)";

  setTimeout(() => {
    greetingEl.textContent = item.text;
    subtitleEl.textContent = item.subtitle;
    greetingEl.style.opacity = "1";
    greetingEl.style.transform = "translateY(0)";
  }, 150);
});

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
