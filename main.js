let playerScore = 0;
const playerScoreDisplay = document.getElementById('playerscore');
let computerScore = 0;
const computerScoreDisplay = document.getElementById('compscore');

function updateScores() {
  console.log('c=' + computerScore + 'p=' + playerScore);
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

const results = document.getElementById('results');

function playWithChoice(e) {
  playRound(this.id, computerPlay())
}

// generates random computer choice
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const choice = choices[Math.floor(Math.random() * 3)];
  document.getElementById('compchoice').textContent =  choice;
  return choice;
}

// generates a 'who wins' message from player & computer selections
function playRound(playerChoice, computerSelection) {
  playerChoice = playerChoice[0].toUpperCase() + [...playerChoice].slice(1).join('');

  // vars for tracking winner
  let playerWins = null;
  let winner;
  let loser;

  // func for 
  function handleChoices(player, computer, playerWins) {
    winOrLose = playerWins ? 'Win!' : 'Lost!';
    winner = playerWins ? player : computer;
    loser = playerWins ? computer : player;
  }

  //determine who wins
  if ((playerChoice == 'Rock' && computerSelection == 'Scissors') ||
      (playerChoice == 'Scissors' && computerSelection == 'Paper') ||
      (playerChoice == 'Paper' && computerSelection == 'Rock')) {
        playerWins = true;
        playerScore++;
        updateScores();
      }
  else if ((playerChoice == 'Rock' && computerSelection == 'Paper') ||
      (playerChoice == 'Scissors' && computerSelection == 'Rock') ||
      (playerChoice == 'Paper' && computerSelection == 'Scissors')) {
        playerWins = false;
        computerScore++;
        updateScores();
      } else {
      results.textContent = 'Draw! Try again';
      return;
  }

  if (playerScore > 4 || computerScore > 4) {
    let winMessage = document.createElement('h2');
    winMessage.textContent = `Game Over! ${playerScore > computerScore ? 'You Win!' : 'Computer Won'}`;
    winMessage.id = 'winmessage';
    results.insertAdjacentElement('afterend', winMessage)
    buttons.forEach(button => button.removeEventListener('click', playWithChoice));
    let resetButton = document.createElement('button');
    resetButton.textContent = 'reset';
    resetButton.id = 'reset'
    resetButton.addEventListener('click', resetGame);
    winMessage.insertAdjacentElement('afterend', resetButton)
  }

  handleChoices(playerChoice, computerSelection, playerWins);
  results.textContent = `You ${playerWins ? 'Won!' : 'Lost!'}! ${winner} beats ${loser}`;
  return playerWins;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  results.textContent = 'Choose Rock, Paper, Scissors!'
  document.getElementById('reset').remove();
  document.getElementById('winmessage').remove();
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
  button.addEventListener('click', playWithChoice);
  document.getElementById('compchoice').textContent =  '';
})
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
button.addEventListener('click', playWithChoice);
});