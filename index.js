
    function getComputerChoice(){
        let r = Math.floor(Math.random() * 3);
        switch(r){
            case 0:
                return "rock";
                case 1:
                    return "paper";
                    case 2:
                        return "scissors";
        }
    }
    let rock = document.querySelector(".rock");
    let paper = document.querySelector(".paper");
    let scissors = document.querySelector(".scissors");

    rock.addEventListener("click", function(){
        let computerChoice = getComputerChoice();
        displayResults(singleRound("rock", computerChoice))
    });
    paper.addEventListener("click", function(){
        let computerChoice = getComputerChoice();
        displayResults(singleRound("paper", computerChoice))
    });
    scissors.addEventListener("click", function(){
        let computerChoice = getComputerChoice();
        displayResults(singleRound("scissors", computerChoice))
    });
   
    function singleRound(playerSelection, computerChoice){

        if(playerSelection == computerChoice){
            return "Draw!"
        }
        if(playerSelection == "rock" & computerChoice == "paper"){
            return "You lose! Paper beats Rock!"
        }
        if(playerSelection == "rock" & computerChoice == "scissors"){
            return "You win! Rock beats Scissors!"
        }

        if(playerSelection == "paper" && computerChoice == "rock"){
            return "You win! Paper beats Rock!"
        }
        if(playerSelection == "paper" && computerChoice == "scissors"){
            return "You lose! Scissors beats Paper!"
        }

        if(playerSelection == "scissors" && computerChoice == "rock"){
            return "You lose! Rock beats Scissors!"
        }
        if(playerSelection == "scissors" && computerChoice == "paper"){
            return "You win! Scissors beats Paper!"
        }
    }

        let results = document.querySelector(".results_container");
        let playerWin = 0; 
        let computerWin = 0;
        let draws = 0;
        let player = document.querySelector(".player");
        let computer = document.querySelector(".cpu");
        let draw = document.querySelector(".draw");
        const div = document.createElement('div');

    function displayResults(res){

        if(res.includes("You win!")){
            playerWin++;
            if(playerWin == 5){
                alert("You Won The Series!");
                playerWin = 0;
                computerWin = 0;
                draws = 0;
                player.innerHTML = playerWin;
                computer.innerHTML = computerWin;
                draw.innerHTML = draws;
                return;
            }
            player.innerHTML = playerWin;
        }else if(res.includes("You lose!")){
            computerWin++;
            if(computerWin == 5){
                alert("CPU Won The Series!");
                playerWin = 0;
                computerWin = 0;
                draws = 0;
                player.innerHTML = playerWin;
                computer.innerHTML = computerWin;
                draw.innerHTML = draws;
                return;
            }
            computer.innerHTML = computerWin;
        }else{
            draws++;
            draw.innerHTML = draws;
        }
        div.id = "result";
        div.innerHTML = res;
        results.appendChild(div);
    }

