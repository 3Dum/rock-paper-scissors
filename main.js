// generates random computer choice
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

// generates a 'who wins' message from player & computer selections
function playRound(playerSelection, computerSelection) {
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
      return 'Draw! Try again';
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
      return 'Draw! Try again';
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
      return 'Draw! Try again';
    } else {
      return 'Error: Invalid computer choice';
    }
  } else {
    return 'Choose "Rock", "Paper" or "Scissors"!';
  }

  handleChoices(playerChoice, computerSelection, playerWins);

  return `You ${playerWins ? 'Won!' : 'Lost!'}! ${winner} beats ${loser}`;
}

console.log(playRound('block', computerPlay()));