let counter = 0;
let heads = true;
let flips = 0;

const coin = document.querySelector(".coin");
const playButton = document.querySelector("#flip-button");

playButton.addEventListener("click", coinFlip);
coin.addEventListener("animationend", secondHalf);

function coinFlip() {
  counter = 0;
  // Determine a random even number of half-cycles (e.g., 2, 4, or 6)
  flips = 2 * (Math.floor(Math.random() * 3) + 1);
  // Reset animation classes for a fresh start
  coin.classList.remove("shrink-animation", "expand-animation");
  // Force reflow so the animation can restart
  void coin.offsetWidth;
  // Start with the shrink animation
  coin.classList.add("shrink-animation");
}

function secondHalf(e) {
  // Remove the class that just finished animating.
  if (coin.classList.contains("shrink-animation")) {
    coin.classList.remove("shrink-animation");
    // Only swap images and add the expand animation if this isn't the final half-cycle.
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
    // If we haven't reached the target, start the next shrink cycle.
    if (counter < flips - 1) {
      coin.classList.add("shrink-animation");
    }
    counter++;
  }
  // When counter === flips, we do nothing—letting the final animation finish gracefully.
}
