let buttons = document.querySelector(".choices");
buttons.addEventListener("click", playRound);

const body = document.querySelector("body");

const message = document.createElement("p");
const playerScore = document.createElement("p");
const botScore = document.createElement("p");

message.style.textAlign = "center";
playerScore.style.textAlign = "center";
botScore.style.textAlign = "center";

message.textContent = "Press any button choice to play!";

body.appendChild(message);
body.appendChild(playerScore);
body.appendChild(botScore);

function getComputerChoice() {
    return Math.floor(Math.random() * 10);
}

function playRound(event) {
        target = event.target.id;
        let computerChoice = getComputerChoice();

        switch(target) {
            case "rock":
                if (computerChoice === 0) {
                    message.textContent = "You Win! The computer chose scissors!"
                } else if (computerChoice === 1 || computerChoice === 2) {
                    message.textContent = "You Tied! The computer chose rock as well!"
                } else {
                    message.textContent = "You Lost! The computer chose paper!"
                }
                break;
            case "paper":
                if (computerChoice === 0) {
                    message.textContent = "You Win! The computer chose scissors!"
                } else if (computerChoice === 1 || computerChoice === 2) {
                    message.textContent = "You Tied! The computer chose paper as well!"
                } else {
                    message.textContent = "You Lost! The computer chose scissors!"
                }
                break;
            case "scissors":
                if (computerChoice === 0) {
                    message.textContent = "You Win! The computer chose paper!"
                } else if (computerChoice === 1 || computerChoice === 2) {
                    message.textContent = "You Tied! The computer chose rock as scissors!"
                } else {
                    message.textContent = "You Lost! The computer chose rock!"
                }
                break;
            default:
                console.log("Something went wrong!");
                break;
        } 
}