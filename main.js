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
            return playerPlay();
        }
    }
    
}