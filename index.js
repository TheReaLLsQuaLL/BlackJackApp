let player = {
    name: "Toprak" ,
    credit: 150 
}
let cards = [] ;
let sum = 0 ;
let hasBlackJack = false ;
let isAlive = false ;
let message = "" ;
let messageEl = document.getElementById("message-el") ;
let sumEl = document.getElementById("sum-el") ;
let cardEl = document.getElementById("card-el") ;
let playerEl = document.getElementById("player-el") ;


playerEl.textContent = player.name + ": $" + player.credit ;


function getRandomCard(){
    return Math.floor(Math.random() * 12) + 1 ;
}


function startGame() {
    isAlive = true ;
    let firstCard = getRandomCard() ;
    let secondCard = getRandomCard() ;
    cards = [firstCard, secondCard] ;
    sum = firstCard + secondCard ;
    renderGame() ;
    
}

function renderGame(){
    cardEl.textContent = "Cards: " ;
    const lastCard = cards.length - 1;

    for(let i = 0; i < cards.length; i ++) {
        if(i === lastCard){
            cardEl.textContent += cards[i];
        }else{
            
            cardEl.textContent += cards[i] + "-" ;
        }
    }

    sumEl.textContent = "Sum: " + sum ;

    if (sum < 21) {
        message = "Want to draw a new card?" ;
    } else if (sum === 21) {
        message = "BlackJack!" ;
        hasBlackJack = true ;
    } else {
        message = "You lose..." ;
        isAlive = false ;
    }

    
    messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard() ;
        sum += card ;
        cards.push(card) ;
        renderGame() ;
    }
    
    
}



