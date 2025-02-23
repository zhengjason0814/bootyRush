let heads = true;

coin = document.querySelector("img");

playButton = document.querySelector("button");
playButton.addEventListener("click", coinFlip);

coin.addEventListener("click", shrink)
coin.addEventListener("animationend", expand);

function shrink() {
    coin.classList.add(".shrink-animation");
}

function expand() {
    
    coin.classList.add("expand-animation");
}

function coinFlip(event) {
    let n = Math.floor(Math.random() * 10);
    for (let i = 0; i < n; i++) {
        shrink();
        heads = !heads;
        expand();
    }
}