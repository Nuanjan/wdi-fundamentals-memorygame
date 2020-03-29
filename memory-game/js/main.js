const card = ["queen","queen","king","king"];
let cardsInPlay = [];
let cardOne = card[0];
let cardTwo = card[2];
cardsInPlay.push(cardOne);
console.log("the user flipped "+cardOne);
cardsInPlay.push(cardTwo);
console.log("the user flipped "+cardTwo);
if(cardsInPlay.length === 2){
	if(cardsInPlay[0]===cardsInPlay[1]){
		alert("You found a match!");
	}else
	alert("Sorry, try again");
}