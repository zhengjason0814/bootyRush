let counter = 0;
let heads = true;
let flips = 0;

const coin = document.querySelector(".coin");
const playButton = document.querySelector("#flip-button");

playButton.addEventListener("click", coinFlip);
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
}
