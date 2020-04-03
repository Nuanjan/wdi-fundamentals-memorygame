const cards = [
{
	rank:'queen',
	suit:'hearts',
	cardImage:'images/queen-of-hearts.png'
},
{
	rank:'queen',
	suit:'dimonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

let cardsInPlay = [];
var score =0;

function flipCard(){
	const cardId = this.getAttribute('data-id');
	
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped "+cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
this.setAttribute('src',cards[cardId].cardImage);
if(cardsInPlay.length==1){
	alert("pick one more card");
}
else if(cardsInPlay.length ==2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
    score +=1;
   document.querySelector('#score').textContent = score;
 
} else {
  alert("Sorry, try again.");
}

} else{
	alert("click refresh to start new game");
}
}

function createBoard(){
	for(let i = 0; i < cards.length; i++){

		const cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement)[i];		
		
	}
}

function refreshElement(){
	window.location.reload();

}


const reset = document.getElementById('refresh');
reset.addEventListener('click',refreshElement);

createBoard();

