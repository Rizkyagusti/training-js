// Bismillah
// input player
var welcome=alert("welcome ! here, you will play guessing numbers with Gusbot");
rules=alert("You have 3 chance for playing this game");
welcome2=alert('lets we\'re play the game');


// Rules
var ask=true;

// Determination

while(ask === true){
for(lives=2;lives >= 0;lives--){


	// Gus bot choosing
	bot=Math.floor(Math.random() * 10) + 1 ;
	


	player=parseInt(prompt('Select numbers 1-10 to guess numbers'));


	if(player==bot){
		alert("Well done ! Gusbot issued is " + bot + " and your answer is " + player + " it's the same");
		break;
	}
	else if(player != bot && player < bot){
		alert("You enter a lower value than the bot");
	}else if(player != bot && player > bot){
		alert("You enter a higher value than the bot");
	}
	else{
		alert("You entered the wrong value")
	}

	
	if(lives >= 1){
		alert("you have " + lives + " chance");
	}else if(lives <= 0 ){
		alert("Oh no ! you have " + lives +  " chance")
		alert("your chance is up");
	}
}

ask=confirm("Want to try again ?");
}

alert("thank you for playing with me");
alert("see you later !");




