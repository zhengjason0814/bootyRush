let buttons = document.querySelector(".choices");
buttons.addEventListener("click", playRound);

const body = document.querySelector("body");
const playStage = document.querySelector(".playing-stage");

const message = document.createElement("p");
const playerScore = document.createElement("p");
const botScore = document.createElement("p");

message.style.textAlign = "center";
playerScore.style.textAlign = "center";
botScore.style.textAlign = "center";

message.textContent = "Press any button choice to play!";
message.style.fontSize = "30px";

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
                    message.textContent = "You Win! The computer chose scissors!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/rock.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    playerChoice.style.animation = "throwFromLeft 1s ease forwards";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/rock.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
                    botChoice.style.animation = "throwFromRight 1s ease forwards";
                    if (playStage.hasChildNodes()) {
                        playStage.replaceChildren();
                    }
                    playStage.append(playerChoice,botChoice);
                } else if (computerChoice === 1 || computerChoice === 2) {
                    message.textContent = "You Tie! The computer also chose rock!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/rock.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    playerChoice.style.animation = "throwFromLeft 1s ease forwards";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/rock.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
                    botChoice.style.animation = "throwFromRight 1s ease forwards";
                    if (playStage.hasChildNodes()) {
                        playStage.replaceChildren();
                    }
                    playStage.append(playerChoice,botChoice);
                } else {
                    message.textContent = "You Lose! The computer chose paper!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/rock.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    playerChoice.style.animation = "throwFromLeft 1s ease forwards";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/paper.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
                    botChoice.style.animation = "throwFromRight 1s ease forwards";  
                    if (playStage.hasChildNodes()) {
                        playStage.replaceChildren();
                    }
                    playStage.append(playerChoice,botChoice);
                }
                break;
            case "paper":
                if (computerChoice === 0) {
                    message.textContent = "You Win! The computer chose rock!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/paper.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    playerChoice.style.animation = "throwFromLeft 1s ease forwards";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/rock.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
                    botChoice.style.animation = "throwFromRight 1s ease forwards";
                    if (playStage.hasChildNodes()) {
                        playStage.replaceChildren();
                    }
                    playStage.append(playerChoice,botChoice);
                } else if (computerChoice === 1 || computerChoice === 2) {
                    message.textContent = "You Tied! The computer chose paper as well!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/paper.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    playerChoice.style.animation = "throwFromLeft 1s ease forwards";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/paper.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
                    botChoice.style.animation = "throwFromRight 1s ease forwards";
                    if (playStage.hasChildNodes()) {
                        playStage.replaceChildren();
                    }
                    playStage.append(playerChoice,botChoice);
                } else {
                    message.textContent = "You Lost! The computer chose scissors!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/paper.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    playerChoice.style.animation = "throwFromLeft 1s ease forwards";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/scissors.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
                    botChoice.style.animation = "throwFromRight 1s ease forwards";
                    if (playStage.hasChildNodes()) {
                        playStage.replaceChildren();
                    }
                    playStage.append(playerChoice,botChoice);
                }
                break;
            case "scissors":
                if (computerChoice === 0) {
                    message.textContent = "You Win! The computer chose paper!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/scissors.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    playerChoice.style.animation = "throwFromLeft 1s ease forwards";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/paper.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
                    botChoice.style.animation = "throwFromRight 1s ease forwards";
                    if (playStage.hasChildNodes()) {
                        playStage.replaceChildren();
                    }
                    playStage.append(playerChoice,botChoice);
                } else if (computerChoice === 1 || computerChoice === 2) {
                    message.textContent = "You Tied! The computer chose rock as scissors!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/scissors.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    playerChoice.style.animation = "throwFromLeft 1s ease forwards";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/scissors.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
                    botChoice.style.animation = "throwFromRight 1s ease forwards";
                    if (playStage.hasChildNodes()) {
                        playStage.replaceChildren();
                    }
                    playStage.append(playerChoice,botChoice);
                } else {
                    message.textContent = "You Lost! The computer chose rock!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/scissors.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    playerChoice.style.animation = "throwFromLeft 1s ease forwards";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/rock.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
                    botChoice.style.animation = "throwFromRight 1s ease forwards";
                    if (playStage.hasChildNodes()) {
                        playStage.replaceChildren();
                    }
                    playStage.append(playerChoice,botChoice);
                }
                break;
            default:
                console.log("Something went wrong!");
                break;
        } 
}
