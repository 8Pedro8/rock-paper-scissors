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

console.log(computerPlay())