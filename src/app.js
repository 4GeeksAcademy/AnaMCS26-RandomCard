/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatorieNumber() {
    const cardValues = [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const randomIndex = Math.floor(Math.random() * cardValues.length);
    return cardValues[randomIndex];
  }
};

function cardRed() {
  let suitCard = document.querySelectorAll(".suit");
  suitCard.forEach(element => {
    element.style.color =
      element.innerHTML === "♦" || element.innerHTML === "♥" ? "red" : "black";
  });
}

function distributeCards() {
  let resultSuit = aleatorieSuits(); // Fix typo
  let resultNumber = aleatorieNumber();

  let suitCards = document.querySelectorAll(".suit");
  suitCards.forEach(item => {
    item.innerHTML = resultSuit;
  });

  let numberCard = document.querySelector(".number");
  numberCard.innerHTML = resultNumber;

  cardRed();
}

let distributeButton = document.querySelector("#boton");
distributeButton.textContent = "Distribute";

distributeButton.addEventListener("click", distributeCards);

console.log(aleatorieSuits());
console.log(aleatorieNumber());

console.log("Hello Rigo from the console!");
console.log("Hello Rigo from the console!");
