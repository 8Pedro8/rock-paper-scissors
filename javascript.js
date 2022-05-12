let computerSelection = "";
let playerSelection = "";
let round = 1;
let TOTAL_ROUNDS = 2;
let playerPoints = 0;
let computerPoints = 0;

function userPlay()
{
    let selection = prompt("Round " + round + "/" + TOTAL_ROUNDS + 
            ", your turn, enter: \'rock\', \'paper\' or \'scissors\'");
    selection = selection.toLowerCase();

    if (selection != "rock" && selection != "paper" && selection != "scissors") {
        alert("Wrong input!");
        return "";
    }
    return selection;
}

function computerPlay() 
{
    let randomDecision = Math.floor(Math.random()*3) + 1;

    switch(randomDecision) 
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "";
    }
}

function selectionsToStateMapping(selectionPair = "") 
{
    switch(selectionPair) 
    {
        case "rock_rock":
        case "paper_paper":
        case "scissors_scissors":
            return "Tie!";

        case "rock_paper":
        case "paper_scissors":
        case "scissors_rock":
            computerPoints++;
            return "You Lost this round! " + selectionPair.replace("_", " can't beat ");

        case "rock_scissors":
        case "paper_rock":
        case "scissors_paper":
            playerPoints++;
            return "You won this round! " + selectionPair.replace("_", " beats ");

        default:
            return "Wrong selection.\n use case: \'rock\' or \'paper\' or \'scissors\'";
    }
}

function showResult() 
{
    let msg = "===============\n\n    Final result: ";
    if(playerPoints > computerPoints) {
        return msg + "You Won!";
    } 
    else if (playerPoints < computerPoints) {
        return msg + "You Lost!";
    }
    else {
        return msg + "Tie!";
    }
}

function playRound(playerSelection = "", computerSelection = "") 
{
    let selectionPair = playerSelection + "_" + computerSelection;
    //console.log("Selection pair: " + selectionPair);

    let userState = selectionsToStateMapping(selectionPair)
    return userState;
}

// Running game for five rounds:
while(round <= TOTAL_ROUNDS) 
{
    playerSelection = userPlay(); 

    // Continue if the user's input is valid
    if(playerSelection != "") 
    {
        computerSelection = computerPlay();

        console.log("Round: " + round);
        console.log("player: " + playerSelection);
        console.log("computer: " + computerSelection);

        console.log("user state is: " + playRound(playerSelection, computerSelection));
        round++;
    }
}

console.log("  player total points: " + playerPoints);
console.log("  computer total points: " + computerPoints);
console.log(showResult())
