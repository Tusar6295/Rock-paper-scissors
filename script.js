const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');

console.log(button1);

button1.addEventListener('click',playRound('rock',));
button2.addEventListener('click',playRound('paper'));
button3.addEventListener('click',playRound('scissors'));




        function getComputerChoice()
        {
            let computerChoice = Math.random();
            if(computerChoice < 0.33)
            {
                computerChoice = 'rock';
            }
            else if(computerChoice < 0.67)
            {
                computerChoice = 'paper';
            }
            else {
                computerChoice = 'scissors';
            }
            return computerChoice;
        }

        
        function playRound(playerSelection)
        {
            let computerSelection = getComputerChoice();
            if(playerSelection == computerSelection)
            {
                console.log("Tie game");
            }
            else if(playerSelection == "rock" && computerSelection == "scissors")
            {
                console.log("You win, rock beats scissors!!");
            }
            else if(playerSelection == "rock" && computerSelection == "paper")
            {
                console.log("You lose, paper beats rock!!");
            }
            else if(playerSelection == "scissors" && computerSelection == "rock")
            {
                console.log("You lose, rock beats scissors!!");
            }
            else if(playerSelection == "scissors" && computerSelection == "paper")
            {
                console.log("You win, scissors beats paper!!");
            }
            else if(playerSelection == "paper" && computerSelection == "scissors")
            {
                console.log("You lose, scissors beats paper!!");
            }
            else if(playerSelection == "paper" && computerSelection == "rock")
            {
                console.log("You win, paper beats rock!!");
            }
        }
        
        // function game()
        // {
        //     for(i=0; i<5; i++)
        //     {
                
        //         let txt = prompt("do you want rock , paper or scissors?");
        //         let playerSelection = txt.toLowerCase();
        //         console.log(playRound(playerSelection, computerSelection));
        //     }
        // }

        // game();
        