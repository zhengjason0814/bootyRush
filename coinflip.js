let heads = true;

let coin = document.querySelector(".coin");
let playButton = document.querySelector("#flip-button");

playButton.addEventListener("click", coinFlip);
coin.addEventListener("animationend", secondFlip)

function coinFlip() {
    let n = Math.floor(Math.random() * 8) + 4;
    for (let i = 1; i < n; i++) {
        coin.classList.add("shrink-animation");
        
    }
}

function secondFlip() {
    if (heads === true) coin.src = "./assets/coinflip/coinTail.png";
    else if (heads === false) coin.src = "coinHead.png";
    coin.classList.remove("shrink-animation");
    coin.classList.add("expand-animation");

}