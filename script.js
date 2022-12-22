const buttons = document.querySelectorAll('div#buttons button');
const reload = document.getElementById('again');
const p = document.querySelector('#para');
const pScore = document.querySelector('#pscore');
const cScore = document.querySelector('#cscore');
const result = document.querySelector('#winner');

reload.addEventListener('click', (e) => {location.reload()})

buttons.forEach(button => {
    button.addEventListener('click', getPlayerChoice);
})

let compScore = 0;
let playerScore = 0;

pScore.textContent = playerScore;
cScore.textContent = compScore;

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
        p.textContent = "Tie game";
        playerScore += 1;
        compScore += 1;
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors")
    {
        p.textContent = "You win, rock beats scissors!!";
        playerScore += 1;
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
    }
    else if(playerSelection == "rock" && computerSelection == "paper")
    {
        p.textContent = "You lose, paper beats rock!!";
        compScore += 1;
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock")
    {
        p.textContent = "You lose, rock beats scissors!!";
        compScore += 1;
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
    }
    else if(playerSelection == "scissors" && computerSelection == "paper")
    {
        p.textContent = "You win, scissors beats paper!!";
        playerScore += 1;
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors")
    {
        p.textContent = "You lose, scissors beats paper!!";
        compScore += 1;
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
    }
    else if(playerSelection == "paper" && computerSelection == "rock")
    {
        p.textContent = "You win, paper beats rock!!";
        playerScore += 1;
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
    }

    checkWinner();
}

function checkWinner(){

    if(playerScore === 5 || compScore === 5)
    {
        if(playerScore === 5){
            result.textContent = "You win the game!!!";
        }
        else if(compScore === 5)
        {
            result.textContent = "You lose the game!!!";
        }
        else if(playerScore === 5 && compScore === 5){
            result.textContent = "It's a draw";
        }

        buttons.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        })
    }

}

function getPlayerChoice(e){
  let playerChoice = e.target.id;
  playRound(playerChoice);
}




       