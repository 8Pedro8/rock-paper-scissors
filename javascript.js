let computerSelection = "";
let playerSelection = "";

function computerPlay() 
{
    let randomDecision = Math.floor(Math.random()*3) + 1;

    switch(randomDecision) 
    {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "";
    }
}

function selectionsToStateMapping(decision = "") {
    switch(decision) 
    {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            return "Tie";

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            return "loser";

        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            return "winner";

        default:
            return "Wrong pair!";
    }
}

function playRound(playerSelection = "", computerSelection = "") 
{
    let selectionsCombined = playerSelection.toLocaleLowerCase() + computerSelection.toLocaleLowerCase();
    console.log("pair: " + selectionsCombined);

    let userState = selectionsToStateMapping(selectionsCombined)
    return userState;
}

playerSelection = "rock";
computerSelection = computerPlay();

console.log("computer: " + computerSelection);
console.log("player: " + playerSelection);

console.log("user state is: " + playRound(playerSelection, computerSelection));
