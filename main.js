// generates random computer choice
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

// generates a 'who wins' message from player & computer selections
function playRound(playerSelection, computerSelection) {
  if (!playerSelection) {
    console.log('Make a choice!');
    return null;
  }
  // parse player selection to correct case
  const playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  // determine who wins
  let playerWins = null;
  let winner;
  let loser;

  function handleChoices(player, computer, playerWins) {
    winOrLose = playerWins ? 'Win!' : 'Lost!';
    winner = playerWins ? player : computer;
    loser = playerWins ? computer : player;
  }

  if (playerChoice == 'Rock') {
    if (computerSelection == 'Rock') {
      console.log('Draw! Try again');
      return null;
    } else if (computerSelection == 'Scissors') {
      playerWins = true;
    } else if (computerSelection == 'Paper') {
      playerWins = false;
    } else {
      return 'Error: Invalid computer choice';
    }
  } else if (playerChoice == 'Scissors') {
    if (computerSelection == 'Rock') {
      playerWins = false;
    } else if (computerSelection == 'Scissors') {
      console.log('Draw! Try again');
      return null;
    } else if (computerSelection == 'Paper') {
      playerWins = true;
    } else {
      return 'Error: Invalid computer choice';
    }
  } else if (playerChoice == 'Paper') {
    if (computerSelection == 'Rock') {
      playerWins = true;
    } else if (computerSelection == 'Scissors') {
      playerWins = false;
    } else if (computerSelection == 'Paper') {
      console.log('Draw! Try again');
      return null;
    } else {
      return 'Error: Invalid computer choice';
    }
  } else {
    return 'Choose "Rock", "Paper" or "Scissors"!';
  }

  handleChoices(playerChoice, computerSelection, playerWins);

  console.log(`You ${playerWins ? 'Won!' : 'Lost!'}! ${winner} beats ${loser}`);
  return playerWins;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let userChoice;

  for (let i = 0; i < 5; i++) {
    userChoice = prompt('Paper, Scissors, Rock?');
    let userWon = playRound(userChoice, computerPlay());
    //update scores
    if (userWon !== null) {
      if (userWon) {
        playerScore++;
      } else {
        computerScore++;
      }
    } else {
      //don't use a turn if it was a tie
      i--;
    }

    console.log(`Your score: ${playerScore} -- Computer's score: ${computerScore}`)
  }
}

game();