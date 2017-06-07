"user strict";

var war = require('./war.js');

let suitS = ["clubs"];
let rankS = [2,3,4,5,6,7,8,9,10,11,12,13,14];

let hand1 = new war.Hand('Player one');
let hand2 = new war.Hand('Player two');
let board = new war.Hand('Board');
let deck = new war.Deck();

debugger;
war.playGame(hand1, hand2, board, deck);