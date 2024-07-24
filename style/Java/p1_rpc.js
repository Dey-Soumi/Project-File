//The const declarations define a set of DOM elements that will be manipulated to display the game's status and enable the player to interact with the game.

//const is used to declare variables whose value can be initialized only at the time of declaration
const choice=document.querySelectorAll('choice');
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const resultElem = document.querySelector('#result');
const playAgainBtn = document.querySelector('#play-again');
const countdownElem = document.querySelector('#countdown');
const computerChoiceElem = document.querySelector('#computer-choice');

//The let declarations define mutable variables that will be used to track the game's state, such as the player and computer's scores and the current countdown timer value.
const weapons=['rock','paper','scissors'];
let playerScore=0;
let computerScore=0;
let countdown=10;
let timeout;

//funtion to generate for computer
function computerplay(){
//Math.floor(Math.random()=it used to return random integers

const weaponIndex = Math.floor(Math.random() * weapons.length);
  return weapons[weaponIndex];
}

//function to update the score display the result
 function updateSore(playerOption,computerOption) 
 {
    clearTimeout(timeout);
    if (playerWeapon)
     {
      computerChoiceElem.innerHTML = `Computer choose: ${computerWeapon}.`;//innerHTML is an HTML element property that has two uses for web developers: 1) You can use it to get the internal HTML content of any HTML element as an HTML string. 2) You can also use it to set or change elements' innerHTML content
      if (playerWeapon === computerWeapon)
       {
        resultElem.innerHTML = "It's a tie!";
       } else if 
       (
        (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
        (playerWeapon === 'paper' && computerWeapon=== 'rock') ||
        (playerWeapon === 'scissors' && computerWeapon === 'paper')
       ) 
       {
        resultElem.innerHTML = 'You win!';
        playerScore++;
        playerScoreElem.innerHTML = `Player: ${playerScore}`;
       } else
        {
        resultElem.innerHTML = 'Computer wins!';
        computerScore++;
        computerScoreElem.innerHTML = `Computer: ${computerScore}`;
       }
       //start coutdown
       startTimer();
    }
    else
    {
        computerChoiceElem.innerHTML = `Game Over`;
        resultElem.innerHTML = 'You did not make a choice! | You have to loose the chance';
        resultElem.style.color = 'red';
        disableOptions();
    }
    //stop countdown
    if (playerScore === 10) {
        resultElem.textContent = 'You win the game!';
        resultElem.style.color = 'green';
        computerChoiceElem.innerHTML = 'Game Over';
        disableOptions();
        stopTimer();
      }
    
      if (computerScore === 10) {
        resultElem.textContent = 'You lose the game!';
        resultElem.style.color = 'red';
        computerChoiceElem.innerHTML = 'Game Over';
        disableOptions();
        stopTimer();
      }
}

// Function to handle player choice
function selectWeapon() {
  clearTimeout(timeout);
  countdownElem.innerHTML = '10';
  countdown = 5;
  const playerWeapon = this.id;
  const computerWeapon = computerplay();
  updateScore(playerWeapon, computerWeapon);
}

// Function to start countdown timer
function startTimer() {
  countdown--;
  countdownElem.innerHTML = countdown;
  if (countdown === 0) {
    const computerWeapon = computerplay();
    updateScore(null, computerWeapon);
  } else {
    timeout = setTimeout(startTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timeout);
  countdown = 10;
  countdownElem.textContent = countdown;
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  countdown = 5;
  playerScoreElem.innerHTML = 'Player: 0';
  computerScoreElem.innerHTML = 'Computer: 0';
  resultElem.innerHTML = 'Choose your weapon!';
  countdownElem.innerHTML = '10';
  resultElem.style.color = '#660033';
  computerChoiceElem.innerHTML = '';
  enableOptions();
  startTimer();
}

function disableOptions() {
  choice.forEach((choice) => {
    choice.style.pointerEvents = 'none';
  });
}

function enableOptions() {
  choice.forEach((choice) => {
    choice.style.pointerEvents = 'auto';
  });
}

// Event listeners
choice.forEach((choice) => choice.addEventListener('click', selectWeapon));
playAgainBtn.addEventListener('click', resetGame);

// Start countdown timer when page loads
countdownElem.innerHTML = countdown; // Set initial value of countdown in HTML
timeout = setTimeout(startTimer, 1000);