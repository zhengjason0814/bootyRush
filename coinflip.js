let counter = 0;
let heads = true;
let flips = 0;
let humanChoice = "";

const headChoice = document.querySelector("#heads");
const tailChoice = document.querySelector("#tails");

headChoice.addEventListener("click", () => {
  humanChoice = "heads";
  pling();
});
headChoice.addEventListener("click", coinFlip);

tailChoice.addEventListener("click", () => {
  humanChoice = "tails";
  pling();
});
tailChoice.addEventListener("click", coinFlip);

const coin = document.querySelector(".coin");
const playButton = document.querySelector("#flip-button");

coin.addEventListener("animationend", secondHalf);

function coinFlip() {
  counter = 0;
  flips = 2 * (Math.floor(Math.random() * 3) + 1);
  coin.classList.remove("shrink-animation", "expand-animation");
  void coin.offsetWidth;
  coin.classList.add("shrink-animation");
}

function secondHalf(e) {
  if (coin.classList.contains("shrink-animation")) {
    coin.classList.remove("shrink-animation");
    if (counter < flips - 1) {
      coin.src = heads 
        ? "./assets/coinflip/coinTail.png" 
        : "./assets/coinflip/coinHead.png";
      heads = !heads;
      coin.classList.add("expand-animation");
    }
    counter++;
  } else if (coin.classList.contains("expand-animation")) {
    coin.classList.remove("expand-animation");
    if (counter < flips - 1) {
      coin.classList.add("shrink-animation");
    }
    counter++;
  }
  
  if (counter >= flips) {
    let finalResult = "";
    if (coin.src.endsWith("coinHead.png")) {
      finalResult = "heads";
    } else if (coin.src.endsWith("coinTail.png")) {
      finalResult = "tails";
    }
    if (finalResult === humanChoice) {
      coin.classList.remove("shrink-animation", "expand-animation");
      void coin.offsetWidth;
      coin.classList.add("shrink-animation");
      flips += 2;
    }
    else{
      loseGold(50);
    }
  }
}

function pling(){
  audio = new Audio("./assets/coinflip/coin-flip.mp3");
  audio.play();
}