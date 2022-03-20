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
      }
  else if ((playerChoice == 'Rock' && computerSelection == 'Paper') ||
           (playerChoice == 'Scissors' && computerSelection == 'Rock') ||
           (playerChoice == 'Paper' && computerSelection == 'Scissors')) {
             playerWins = false;
           }
  else if (playerChoice == computerSelection) {
    console.log('Draw! Try again');
    return null;
  } else {
    console.log('Choose "Rock", "Paper" or "Scissors"!')
    return null;
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

    if (computerScore > 2) {
      console.log('Computer Wins!');
      i = 5;
    }

    if (playerScore > 2) {
      console.log('You Win!')
      i = 5;
    }

    console.log(`Your score: ${playerScore} -- Computer's score: ${computerScore}`)
  }
}

game();