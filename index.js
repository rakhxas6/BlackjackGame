// create two variables firstCard and secondCard
//  set their values to a random number between 2-11

// 2. create a variable, sum , and set it to the sum of the two cards

// let firstCard = 11
// let secondCard = 11
// let sum = firstCard + secondCard

// if (sum < 21 ) {
//     console.log("Do you want to draw a new card? 😅")
// }else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
// }else {
//     console.log("You're out of the game! 😭")
// }

// check if the person is old enough to enter the nightclub (21)
// log a suitable message to the console in both cases

// let age = 21
// if (age<21){
//     console.log("You can't enter the club!")
// }
// else{
//     console.log("You're Welcome!")
// }

// if less than 21 -> " You can't enter the club!"
//else    -> "You're Welcome!"

// check if the person is eligible for a birthday card from the King! (100)

// let age = 100
// if(age<100){
//     console.log("Not eligible")
// }else if(age===100){
//     console.log("Here is your birthday card from the King!")
// }else{
//     console.log("Not eligible, You have already gotten one")
// }

// let firstCard = 11
// let secondCard = 11
// let sum = firstCard + secondCard

// let hasBlackJack = false
// let isAlive = true

// // create a variable called isAlive and assign it to true

// // flip its value to false in the appropriate code block

// if(sum<=20){
//     console.log("Do you want to draw a new card?")
// }else if(sum===21) {
//     console.log("Wohoo! You've got Blackjack!")
//     hasBlackJack = true
// }else{
//     console.log("You're out of the game!")
//     isAlive = false
// }

// //cash out!
// console.log(hasBlackJack)
// console.log(isAlive)

// console.log(4===3)    // false
// console.log(5>2)// true
// console.log(12>12)// false
// console.log(3<0)// false
// console.log(3>=3)// true
// console.log(11<=11)// true
// console.log(3<=2)// false

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true

// // 1. Declare a variable called message and assign its value to an empty string

// let message = ""
// // 2. Reassign the message variable to the string we're logging out

// function startGame() {
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     console.log(message)
// }

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// // 1. store the message-el paragraph in a variable called message()

// function startGame() {
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     // 2. display the message in the messageEl using messageEl.textContent
//     messageEl.textContent = message
// }

// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// // 2. store the sum paragraph in a variable called sumEl
// let sumEl = document.getElementById("sum-el")

// function startGame() {
//     // 3. render the sum on the page using this format -> "Sum: 14"
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
//     sumEl.textContent = "Sum: "+ sum
// }

// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// // 2. store the sum paragraph in a variable called sumEl
// let sumEl = document.getElementById("sum-el")
// // let sumEl = document.querySelector("#sum-el")

// function startGame() {
//     // 3. render the sum on the page using this format -> "Sum: 14"
//     sumEl.textContent = "Sum: "+ sum
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")

// //2. store the cards paragraph in a variable called cardsEl
// let cardsEl = document.getElementById("cards-el")
// function startGame() {
//     // 3. render the cards on the page using this format -> "Cards: 10 4"
//     cardsEl.textContent = "Cards: " + firstCard + " "+  secondCard
//     sumEl.textContent = "Sum: "+ sum
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// function startGame() {
//     cardsEl.textContent = "Cards: " + firstCard + " "+  secondCard
//     sumEl.textContent = "Sum: "+ sum
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// // 2. Create a function newCard() that logs out "Drawing a new Card from the Deck"

// function newCard() {
//     console.log("Drawing a new card from the deck!")

// // 1. create a card variable, and hard code its value to a number (2-11)
// let card = 7

// //2. add the new card to the sum variable
// sum += card

// // 3. call startGame()
// startGame()

// }

// let firstCard = 10
// let secondCard = 4
// let cards =[firstCard, secondCard]   // array - ordered lists of items
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// // create a function called startGame() that calls renderGame()

// function startGame(){
//     renderGame()
// }

// function renderGame() {
//     // render out the firstCard and secondCard
//     cardsEl.textContent = "Cards: " + cards[0] + " "+  cards[1]

//     // render out all the cards
//     sumEl.textContent = "Sum: "+ sum
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
// let card = 6
// sum += card

// // push the card to the cards array
// cards.push(card)
// console.log(cards)
// renderGame()

// }

// let firstCard = 10
// let secondCard = 4
// let cards =[firstCard, secondCard]   // array - ordered lists of items
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard(){
//     console.log(5)
// }
// getRandomCard()

// function startGame(){
//     renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: "
// // create a for loop that renders out all the cards instead of just two

//  for ( let i = 0; i < cards.length; i++ ) {
//     cardsEl.textContent += cards[i] + " "
//  }

//     sumEl.textContent = "Sum: "+ sum
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
// let card = 6
// sum += card
// cards.push(card)
// console.log(cards)
// renderGame()
// }

// 2. use getRandomCard() to set the values of firstcard and secondCard

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards =[firstCard, secondCard]   // array - ordered lists of items
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// //1. Create a function, getRandomCard(), that always returns the number 5
// // make this funciton return a random number between 1 and 13
// function getRandomCard(){
// //    let randomNumber = Math.floor(Math.random() * 13) + 1
// //    return randomNumber
//    return Math.floor(Math.random() * 13) + 1 // 1 - 13
// }

// function startGame(){
//     renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: "
//  for ( let i = 0; i < cards.length; i++ ) {
//     cardsEl.textContent += cards[i] + " "
//  }

//     sumEl.textContent = "Sum: "+ sum
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
// let card = getRandomCard()
// sum += card
// cards.push(card)
// console.log(cards)
// renderGame()
// }

// // let firstCard = getRandomCard()
// // let secondCard = getRandomCard()
// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard(){
//   // if 1 -> return 11
//   // if 11-13 => return 10
//   let randomNumber = Math.floor(Math.random() * 13 ) + 1
//  if (randomNumber===1){
//     return 11
//  }else if (randomNumber>10){
//     return 10
//  }else{
//     return randomNumber
//  }
// }

// function startGame(){
//     isAlive = true
//     // generate two random numbers
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     // re-assign the cards and sum variables so that the game can start
//      cards = [firstCard, secondCard]
//      sum = firstCard + secondCard

//     renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: "
//  for ( let i = 0; i < cards.length; i++ ) {
//     cardsEl.textContent += cards[i] + " "
//  }

//     sumEl.textContent = "Sum: "+ sum
//     if(sum<=20){
//         message = "Do you want to draw a new card?"
//     }else if(sum===21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true
//     }else{
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
// let card = getRandomCard()
// sum += card
// cards.push(card)
// console.log(cards)
// renderGame()
// }

// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardsEl = document.getElementById("cards-el");

// // object creation
// let player ={
//      name: "Sujan",
//      chips: 145
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips //calling the name in player object.

// function getRandomCard() {
//   let randomNumber = Math.floor(Math.random() * 13) + 1;
//   if (randomNumber === 1) {
//     return 11;
//   } else if (randomNumber > 10) {
//     return 10;
//   } else {
//     return randomNumber;
//   }
// }

// function startGame() {
//   isAlive = true;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();
//   cards = [firstCard, secondCard];
//   sum = firstCard + secondCard;
//   renderGame();
// }

// function renderGame() {
//   cardsEl.textContent = "Cards: ";
//   for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent += cards[i] + " ";
//   }
//   sumEl.textContent = "Sum: " + sum;
//   if (sum <= 20) {
//     message = "Do you want to draw a new card?";
//   } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack!";
//     hasBlackJack = true;
//   } else {
//     message = "You're out of the game!";
//     isAlive = false;
//   }
//   messageEl.textContent = message;
// }

// function newCard() {
// // Only allow the player to get a new card if she is alive and doesn't have blackjack
// if (isAlive === true && hasBlackJack === false) {
//   let card = getRandomCard();
//   sum += card;
//   cards.push(card);
//   renderGame();
//   }
// }

// // 2. Create the player object. Give it two keys, name and chips,
// let player ={
//   name: "Sujan",
//   chips: 200,
//   // sayHello: function(){
//   //   console.log("Heisann!")
//   // }
// }

// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardsEl = document.getElementById("cards-el");

// // 3. Grab ahold of the player-el paragraph and store it in a variable
// // called player-el
// let playerEl = document.getElementById("player-el")

// // 4. Render the player's name and chips in playerEl
// playerEl.textContent = player.name + ": $" + player.chips

// function getRandomCard() {
//   let randomNumber = Math.floor(Math.random() * 13) + 1;
//   if (randomNumber === 1) {
//     return 11;
//   } else if (randomNumber > 10) {
//     return 10;
//   } else {
//     return randomNumber;
//   }
// }

// function startGame() {
//   isAlive = true;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();
//   cards = [firstCard, secondCard];
//   sum = firstCard + secondCard;
//   renderGame();
// }

// function renderGame() {
//   cardsEl.textContent = "Cards: ";
//   for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent += cards[i] + " ";
//   }
//   sumEl.textContent = "Sum: " + sum;
//   if (sum <= 20) {
//     message = "Do you want to draw a new card?";
//   } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack!";
//     hasBlackJack = true;
//   } else {
//     message = "You're out of the game!";
//     isAlive = false;
//   }
//   messageEl.textContent = message;
// }

// function newCard() {
// if (isAlive === true && hasBlackJack === false) {
//   let card = getRandomCard();
//   sum += card;
//   cards.push(card);
//   renderGame();
//   }
// }

let player = {
  name: "Sujan",
  chips: 200,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
