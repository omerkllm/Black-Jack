
let cards = [];
let sum = 0;
let sumEl = document.getElementById("sum-el");
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let message = "";
let cardEl = document.getElementById("cards-el");
let endGame = document.getElementById("newCard-el");
let score = document.getElementById("score-el");
let saveCounter = 0;
let scoreNum = 0;
let player1 = document.getElementById("player-el");
let money = document.getElementById("money-el");
let totalMoney = 0;




function getRandomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card == 1) {
    card = 11;
  }
  if (card >= 11 && card <= 13) {
    card = 10;
  }
  return card;
}

function startGame() {
  endGame.textContent = "Next Card";
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  let allCards = "";
  for (let i = 0; i < cards.length; i++) {
    allCards += cards[i] + ", ";
  }
  if (sum < 21) {
    message = "Do you want to draw another card? 😊";
    scoreNum += 50;
    totalMoney += 50;
  } else if (sum === 21) {
    message = "You got Black Jack 🥳";
    hasBlackJack = true;
    scoreNum += 120;
    totalMoney += 120;
  } else {
    message = "You are out of the Game 😭";
    isAlive = false;
    scoreNum += 0;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: [" + sum + "]";
  cardEl.textContent = "Cards: [" + allCards + "]";
}

function newCard() {
  if (hasBlackJack == false && isAlive == true) {
    console.log("Drawing a new card from the deck");
    let newCard = getRandomCard();
    cards.push(newCard);
    sum = sum + newCard;
    renderGame();
  } else {
    const newEl = document.createElement("p");
    endGame.textContent = "Save Game";
    saveCounter++;
    let newEntry = "\nGame " + saveCounter + " : " + scoreNum;
    score.textContent += newEntry;
    scoreNum = 0;
    sum = 0;
    cards = [];
    hasBlackJack = false;
    isAlive = false;
    startGame();
  }
}

let player = {
  name: "Ahmad",
  money: totalMoney,
};

player1.textContent += player.name;
money.textContent += player.money;

console.log(sum);

console.log(message);
