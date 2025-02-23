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

body.appendChild(message);
body.appendChild(playerScore);
body.appendChild(botScore);

function getComputerChoice() {
<<<<<<< HEAD
    return Math.floor(Math.random() * 10);
=======
  return Math.floor(Math.random() * 3);
>>>>>>> 75d75ce (index)
}

function playRound(event) {
  target = event.target.id;
  let computerChoice = getComputerChoice();

<<<<<<< HEAD
        switch(target) {
            case "rock":
                if (computerChoice === 0) {
                    message.textContent = "You Win! The computer chose scissors!";
                    let playerChoice = document.createElement("img");
                    playerChoice.src = "./assets/rock.png";
                    playerChoice.style.width = "100px";
                    playerChoice.style.height = "100px";
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/rock.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
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
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/rock.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
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
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/paper.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
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
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/rock.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
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
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/paper.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
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
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/scissors.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
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
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/paper.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
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
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/scissors.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
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
                    let botChoice = document.createElement("img");
                    botChoice.src = "./assets/rock.png";
                    botChoice.style.width = "100px";
                    botChoice.style.height = "100px";
                    botChoice.style.transform = "scaleX(-1)";
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
=======
  switch (target) {
    case "rock":
      if (computerChoice == 0) {
        message.textContent = "Tie! Rock ties with rock!";
        playerScore.textContent = `Player Score: ${humanScore}`;
        botScore.textContent = `Computer Score: ${computerScore}`;
      } else if (computerChoice == 1) {
        message.textContent = "You Lose! Rock loses to paper!";
        computerScore++;
        playerScore.textContent = `Player Score: ${humanScore}`;
        botScore.textContent = `Computer Score: ${computerScore}`;
      } else {
        message.textContent = "You Win! Rock wins against scissors!";
        humanScore++;
        playerScore.textContent = `Player Score: ${humanScore}`;
        botScore.textContent = `Computer Score: ${computerScore}`;
      }
      break;
    case "paper":
      if (computerChoice == 0) {
        message.textContent = "You Win! Paper beats rock!";
        humanScore++;
        playerScore.textContent = `Player Score: ${humanScore}`;
        botScore.textContent = `Computer Score: ${computerScore}`;
      } else if (computerChoice == 1) {
        message.textContent = "Tie! Paper ties with paper!";
        playerScore.textContent = `Player Score: ${humanScore}`;
        botScore.textContent = `Computer Score: ${computerScore}`;
      } else {
        message.textContent = "You Lose! Paper loses against scissors!";
        computerScore++;
        playerScore.textContent = `Player Score: ${humanScore}`;
        botScore.textContent = `Computer Score: ${computerScore}`;
      }
      break;
    case "scissors":
      if (computerChoice == 0) {
        message.textContent = "You Lose! Scissors loses to rock!";
        computerScore++;
        playerScore.textContent = `Player Score: ${humanScore}`;
        botScore.textContent = `Computer Score: ${computerScore}`;
      } else if (computerChoice == 1) {
        message.textContent = "You Win! Scissors wins against paper!";
        humanScore++;
        playerScore.textContent = `Player Score: ${humanScore}`;
        botScore.textContent = `Computer Score: ${computerScore}`;
      } else {
        message.textContent = "Tie! Scissors ties with scissors!";
        playerScore.textContent = `Player Score: ${humanScore}`;
        botScore.textContent = `Computer Score: ${computerScore}`;
      }
      break;
    default:
      console.log("Something went wrong!");
      break;
  }
  if (computerScore === 5) {
    message.textContent = "Computer Wins! Try again next time.";
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore === 5) {
    message.textContent = "Congratulations! You won!";
    computerScore = 0;
    humanScore = 0;
  }
}
>>>>>>> 75d75ce (index)
