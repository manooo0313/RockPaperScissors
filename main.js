let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let n = Math.random();
    if (n <= (1/3)) {
        return "Rock";
    } else if (n <= (2/3)) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function capitalizeFirstLetterAndLowerCaseTheOthers(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playerPlay() {
    let selection = prompt ("Enter one of this: Rock, Paper, Scissors!");
    if (selection != null) {
        selection = capitalizeFirstLetterAndLowerCaseTheOthers(selection);
        if (selection == "Rock" || selection == "Paper" || selection == "Scissors") {
            return selection;
        } else {
            alert(`"${selection}" is not a valid choice, please re-enter: Rock, Paper or Scissors`);
            return;
        }
    }
}


// Rock:    - beat Scissors
//          - tie Rock -> playerSelection === computerSelection
//          - loose Paper
//Paper:    - beat Rock
//          - tie Paper -> playerSelection === computerSelection
//          - loose Scissors
//Scissors: - beat Paper
//          - tie Scissors -> playerSelection === computerSelection
//          - loose Rock


function playRound(playerSelection, computerSelection){
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection){
        console.log("Tie, " + playerSelection + " is equal with " + computerSelection + "!");
        //return "Tie, " + playerSelection + " is equal with " + computerSelection + "!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore ++;
        console.log("You win, " + playerSelection + " beat " + computerSelection + "!");
        console.log("Player Score is: " + playerScore);
        //return "You win, " + playerSelection + " beat " + computerSelection + "!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore ++;
        console.log("Computer win, " + computerSelection + " beat " + playerSelection + "!");
        console.log("Computer Score is: " + computerScore);
        //return "Computer win, " + computerSelection + " beat " + playerSelection + "!";
    }
}

function game() {
    while (playerScore != 5 && computerScore != 5) {
        playRound();
        if (playerScore === 5){
            console.log("Congratulation! You beat the Computer! If you want to play again than hit 'Begin' button!");
            gameOver();
            break;
        } else if (computerScore === 5) {
            console.log("Computer win! If you want to play again than hit 'Begin' button!");
            gameOver();
            break;
        }
    }
}

function gameOver(){
    playerScore = 0;
    computerScore = 0;
} 