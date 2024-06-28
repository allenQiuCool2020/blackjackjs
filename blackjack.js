var firstCard = 6
var secondCard = 9
var sum =  firstCard + secondCard
var hasBlackjack = false
var isAlive = true
var message = ''
var cards = [firstCard, secondCard]
// var sumEl = document.getElementById("sum-el")
var messageEl = document.getElementById("message-el")
var sumEl = document.querySelector("#sum-el")
var cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    sumEl.textContent = 'Sum: ' + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        isAlive = false
        message = "You are out of the game!"
    }
    messageEl.textContent = message
}

function newCard(){
    var card = 7
    sum += card
    renderGame()
    console.log("test");
}

var age = 22 
if (age <= 20){
    console.log("You can not enter the club");
} else {
    console.log("Welcome! ");
}

