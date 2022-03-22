const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', playWithChoice);
})

let playerScore = 0;
const playerScoreDisplay = document.getElementById('playerscore');
let computerScore = 0;
const computerScoreDisplay = document.getElementById('compscore');

const results = document.getElementById('results');

function playWithChoice(e) {
  playRound(this.id, computerPlay())
}

// generates random computer choice
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
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

  console.log('P: ' + playerChoice + '  c:' + computerSelection);

  //determine who wins
  if ((playerChoice == 'Rock' && computerSelection == 'Scissors') ||
      (playerChoice == 'Scissors' && computerSelection == 'Paper') ||
      (playerChoice == 'Paper' && computerSelection == 'Rock')) {
        playerWins = true;
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      }
  else if ((playerChoice == 'Rock' && computerSelection == 'Paper') ||
           (playerChoice == 'Scissors' && computerSelection == 'Rock') ||
           (playerChoice == 'Paper' && computerSelection == 'Scissors')) {
             playerWins = false;
             computerScore++;
             computerScoreDisplay.textContent = computerScore;
           }
  else if (playerChoice == computerSelection) {
    results.textContent = 'Draw! Try again';
    return null;
  } else { //**** can probably delete */
    results.textContent = 'ERROR'
    return null;
  }

  if (playerScore > 4 || computerScore > 4) {
    let winMessage = document.createElement('h2');
    winMessage.textContent = `Game Over! ${playerScore > computerScore ? 'You Win!' : 'Computer Won'}`;
    results.insertAdjacentElement('afterend', winMessage)
    buttons.forEach(button => button.removeEventListener('click', playWithChoice));
  }

  handleChoices(playerChoice, computerSelection, playerWins);
  results.textContent = `You ${playerWins ? 'Won!' : 'Lost!'}! ${winner} beats ${loser}`;
  return playerWins;
}



function resetGame() {
  let playerScore = 0;
  let computerScore = 0;
  results.textContent = 'Choose Rock, Paper, Scissors!'

  //update scores
  if (userWon !== null) {
    if (userWon) {
      playerScore++;
    } else {
      computerScore++;
    }
  } else {
    //don't use a turn if it was a tie
    //i--;
  }

  if (computerScore > 2) {
    results.textContent = 'Computer Wins!';
    i = 5;
  }

  if (playerScore > 2) {
    results.textContent = 'You Win!';
    i = 5;
  }

    results.textContent += ` - Your score: ${playerScore} -- Computer's score: ${computerScore}`;
}
