function game(){
    function getComputerChoice(){
        let r = Math.floor(Math.random() * 3);
        switch(r){
            case 0:
                return "Rock";
                case 1:
                    return "Paper";
                    case 2:
                        return "Scissors";
        }
    }
    let playerSelection = prompt("Rock, paper, or scissors?")
    let computerChoice = getComputerChoice();
    function singleRound(playerSelection, computerChoice){
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection == computerChoice.toLowerCase()){
            return "Draw!"
        }
        if(playerSelection == "rock" & computerChoice == "Paper"){
            return "You lose! Paper beats Rock!"
        }
        if(playerSelection == "rock" & computerChoice == "Scissors"){
            return "You win! Rock beats Scissors!"
        }

        if(playerSelection == "paper" && computerChoice == "Rock"){
            return "You win! Paper beats Rock!"
        }
        if(playerSelection == "paper" && computerChoice == "Scissors"){
            return "You lose! Scissors beats Paper!"
        }

        if(playerSelection == "scissors" && computerChoice == "Rock"){
            return "You lose! Rock beats Scissors!"
        }
        if(playerSelection == "scissors" && computerChoice == "Paper"){
            return "You win! Scissors beats Paper!"
        }
    }

    return(singleRound(playerSelection, computerChoice));
    
}
let playerWin = 0;
let computerWin = 0;
let draw = 0;
/*for(let i = 0; i < 5; i++){
    let s = game();
   if(s.includes("You win!")){
    playerWin++;
   }else if(s.includes("You lose!")){
    computerWin++
   }else{
    draw++;
   }
}
console.log("Player: " + playerWin + " \nComputer: " + computerWin + " \nDraws: " + draw);*/
