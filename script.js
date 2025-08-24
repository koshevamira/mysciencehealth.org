// Калкулатор на калории
document.getElementById("calorieForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let age = parseInt(document.getElementById("age").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let gender = document.getElementById("gender").value;
  let activity = parseFloat(document.getElementById("activity").value);

  let bmr;
  if (gender === "male") {
    bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  } else {
    bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  }

  let calories = bmr * activity;
  document.getElementById("result").textContent = "Дневна нужда: " + Math.round(calories) + " kcal";
});

// Прост AI чат (локален, без API)
function sendMessage() {
  let input = document.getElementById("userInput");
  let msg = input.value.trim();
  if (msg === "") return;

  let messages = document.getElementById("messages");
  let userMsg = document.createElement("p");
  userMsg.textContent = "👤: " + msg;
  messages.appendChild(userMsg);

  let botMsg = document.createElement("p");
  if (msg.toLowerCase().includes("калории")) {
    botMsg.textContent = "🤖: Можете да използвате нашия калкулатор горе ↑ за точна сметка!";
  } else if (msg.toLowerCase().includes("здравей")) {
    botMsg.textContent = "🤖: Здравей! Как мога да помогна за твоето здраве?";
  } else {
    botMsg.textContent = "🤖: Аз съм демо AI. Мога да давам базови отговори за хранене и калории.";
  }
  messages.appendChild(botMsg);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}
