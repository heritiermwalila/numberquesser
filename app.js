//game variable

let min = 1,
	max = 10,
	winNumb = getRandomNum(min, max),
	guestLeft = 3;


//UI Elements

const game = document.querySelector('#game'),
	  minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  guestInput = document.querySelector('#guess-input'),
	  guestBtn = document.querySelector('#guess-btn'),
	  message = document.querySelector('.message');


//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//Play again

game.addEventListener('mousedown', function(e){

	if (e.target.className === 'play-again') {

		window.location.reload();
	}
})

//listen
guestBtn.addEventListener('click', function(){
	let guess = parseInt(guestInput.value);

	if(isNaN(guess) || guess < min || guess > max){

		printMessage(`Please the number must be between ${min} and ${max}`, 'red');
	}

	//if the user won

	if(guess === winNumb){

		gameOver(true, `${winNumb} is correct ! YOU WIN`)

	}else{

		guestLeft -= 1;

		

		if (guestLeft === 0) {

			gameOver(false, `Game is over and the correct number was ${winNumb}`);

			
		}else{

			guestInput.value = '';

			printMessage(`${guess} is not correct, ${guestLeft} left for you`, 'red')
		}
	}
});


// Game Over

function gameOver(won, msg){

	let color;

	won === true ? color = 'green' : color = 'red';

	guestInput.style.borderColor = color;
	message.style.color = color;

		//disable the field

		guestInput.disabled = true;

		//let the user know

		printMessage(msg);

		//play again

	guestBtn.value = 'Play Again';
	guestBtn.className += 'play-again';


}

//get random number

function getRandomNum(min, max){

	return Math.floor(Math.random() * (max - min + 1) + min);

}
//printMessage

function printMessage(msg, color){

	message.style.color = color;
	guestInput.style.borderColor = color;
	message.textContent = msg;
}