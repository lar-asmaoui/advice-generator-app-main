const adviceId = document.querySelector("#advice-id");
const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateAdvice);

// when the whole page has loaded
window.addEventListener("load", generateAdvice);

async function generateAdvice() {
  const response = await fetch(
    `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 224 + 1)}`
  );
  const data = await response.json();
  adviceId.textContent = `advice #${data.slip.id}`;
  quote.textContent = `"${data.slip.advice}"`;
}
