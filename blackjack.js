var cards = []
var sum =  0
var hasBlackjack = false
var isAlive = true
var message = ''
// var sumEl = document.getElementById("sum-el")
var messageEl = document.getElementById("message-el")
var sumEl = document.querySelector("#sum-el")
var cardsEl = document.getElementById("cards-el")
var player = {
    name: "Allen",
    chips:  1000, 
    sayHello: function() {
        console.log("hellow world");
    }
}

var playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    randoNumber = Math.floor(Math.random()*13 + 1)
    if (randoNumber === 1){
        return 11
    } else if ( randoNumber > 10 ){
        return 10
    } else
    return randoNumber
}


function startGame(){
    isAlive = true
    var firstCard = getRandomCard()
    var secondCard = getRandomCard()
    cards=[firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (var i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
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
    if (hasBlackjack === false && isAlive === true){
        var card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
        console.log(cards);
    }
}

var age = 22 
if (age <= 20){
    console.log("You can not enter the club");
} else {
    console.log("Welcome! ");
}

