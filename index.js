let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let sumEl = document.getElementById("sum-el");
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let message = "";
let cards = document.getElementById("cards-el");

function startGame() {
  if (sum < 21) {
    message = "Do you want to draw another card? 😊";
  } else if (sum === 21) {
    message = "You got Black Jack 🥳";
    hasBlackJack = true;
  } else {
    message = "You are out of the Game 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: [" + sum +"]";
  cards.textContent = "Cards: [" + firstCard + ", " + secondCard +"]";
}

function newCard() {
  console.log("Drawing a new card from the deck");
}

console.log(sum);

console.log(message);
