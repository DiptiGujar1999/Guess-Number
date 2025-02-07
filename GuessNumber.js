let randomNumber = parseInt(Math.random()* 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    // check the value is 1 to 100
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess <1){
        alert('please enter  a number more than 1');
    }
    else if(guess >100){
        alert('please enter  a number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
           displayGuess(guess);
           displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
           } else {
            displayGuess(guess);
            checkGuess(guess);
           }
    }
}

function checkGuess(guess){
   // values is equal / not equal to random number , msg display
   if(guess === randomNumber){
    displayMessage(`You Guessed it Right`);
    endGame();
   }else if(guess < randomNumber){
    displayMessage(`Number is TOO Low`);
   }else if(guess > randomNumber){
    displayMessage(`Number is TOO High`);
   }
}

function displayGuess(guess){
    // values clean , arrays update
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
 // dispaly msg
 lowOrHi.innerHTML = `<h2>${message}</h2>`;
} 

function endGame(){
    //end game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
   startOver.appendChild(p);
   playGame = false;
   newGame();
}

function newGame(){
    //new game
  const newGameButton =   document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })

}