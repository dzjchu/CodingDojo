"use strict";

let loser;
// let suitS = ["clubs", "spades", "hearts", "diamonds"];
let suitS = ["clubs"];
let rankS = [2,3,4,5,6,7,8,9,10,11,12,13,14];

let hand1 = new Hand('Player one');
let hand2 = new Hand('Player two');
let board = new Hand('Board');
let deck = new Deck();

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

Card.prototype.compare = function(other) {
   if (this.rank === other.rank) {
       return 0;
   }
   if (this.rank < other.rank) {
       return -1;
   }
   if (this.rank > other.rank) {
       return 1;
   }
}

Card.prototype.toString = function() {
    let fancyCards = {
        14: "Ace",
        13: "King",
        12: "Queen",
        11: "Jack"
    };
    let rank = fancyCards[this.rank] ? fancyCards[this.rank] : this.rank;
    return `${this.rank} of ${this.suit}`;
}

function Deck() {
    let deckOfCards = [];

    function exch(i, j) {
        let temp = deckOfCards[i];
        deckOfCards[i] = deckOfCards[j];
        deckOfCards[j] = temp;
    }

    for (var i = 0; i < suitS.length; i++) {
        for (var j = 0; j < rankS.length; j++) {
            deckOfCards.push(new Card(suitS[i], rankS[j]));
        }
    }
    Deck.prototype.shuffle = function() {
        if (deckOfCards.length === 0) return;
        for (let index = 0; index < deckOfCards.length; index++) {
            let currentSize = deckOfCards.length - index - 1
            let randomIndex = Math.floor(Math.random() * currentSize)
            exch(index, randomIndex)
        }
    }
    Deck.prototype.deal = function() {
        let card = deckOfCards.pop();
        return card;
    }
    Deck.prototype.isEmpty = function() {
        return deckOfCards.length === 0;
    }
}

function Hand(name) {
    this.name = name;

    this.cards = [];
    Hand.prototype.isEmpty = function() {
        return this.cards.length === 0;
    }

    Hand.prototype.draw = function() {
        return this.cards.shift();
    }

    Hand.prototype.collect = function(card) {
        this.cards.push(card)
    }
}

let computeLoser = function() {
    if (hand1.isEmpty()) {
        return 1;
    }
    if (hand2.isEmpty()) {
        return 2;
    }
    return 0;
}

let log = function(card, hand) {
   let message = `${card.toString()} drawn by ${hand.name}`; 
   console.log(message);
}

let war = function() {
   // result === 0
   // board has card1, card2
   // check if hand1 and hand2 is not empty
   // keep asking if their's a loser

   let result = 0; // This is true when war is called
   let loser = computeLoser();

   while(loser === 0 && result === 0) {
        let card1 = hand1.draw();
        log(card1, hand1);

        let card2 = hand2.draw();
        log(card2, hand2);

        board.collect(card1);
        board.collect(card2);

        result = card1.compare(card2);
        loser = computeLoser();
    }

    return result;
}

// function playGame(hand1, hand2, board, deck) {
    // deck.shuffle();

    let dummy = 0;
    // deal cards until deck is empty
    while(!deck.isEmpty()) {
        if (dummy % 2 === 0) {
            hand1.collect(deck.deal());
        } else {
            hand2.collect(deck.deal());
        }
        dummy += 1;
    }

    loser = computeLoser();

    while(loser === 0) {
        // Draw from hand1 
        let card1 = hand1.draw();
        log(card1, hand1);

        // Draw from hand2 
        let card2 = hand2.draw();
        log(card2, hand2);

        // Compare c1 and c2
        let result = card1.compare(card2);

        if (result === 0) {
            board.collect(card1);
            board.collect(card2);
            board.collect(hand1.draw());
            board.collect(hand2.draw());
            result = war();

            let hand;
            if (result < 0) {
                hand = hand1;
            } else {
                hand = hand2;
            }

            while(!board.isEmpty()) {
                hand.collect(board.draw());
            }
        }
        if (result < 0) {
            hand1.collect(card1);
            hand1.collect(card2);
        } else {
            hand2.collect(card1);
            hand2.collect(card2);
        }
        
        loser = computeLoser();
    }

    if (loser === 1) {
        console.log(`${hand2.name} is the winner`);
    } else if (loser === 2) {
        console.log(`${hand1.name} is the winner`);
    } else {
        console.log("Ooopppsssiiiee");
    }
// }