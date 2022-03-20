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
    //return null;
  } else {
    console.log('Choose "Rock", "Paper" or "Scissors"!')
    //return null;
  }