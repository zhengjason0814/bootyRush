function loseGold(amount) {
    let gold = localStorage.getItem('playerGold') || 1000; 
    gold = parseInt(gold) - amount;
    localStorage.setItem('playerGold', gold);
    document.getElementById('goldDisplay').textContent = `Krabby Patty Coins: $${gold}`;
}

function addGold(amount) {
    let gold = localStorage.getItem('playerGold') || 1000;
    gold = parseInt(gold) + amount;
    localStorage.setItem('playerGold', gold);
    document.getElementById('goldDisplay').textContent = `Krabby Patty Coins: $${gold}`;
}

function initializeGold() {
    let gold = localStorage.getItem('playerGold') || 1000;
    document.getElementById('goldDisplay').textContent = `Krabby Patty Coins: $${gold}`;
}

document.addEventListener('DOMContentLoaded', initializeGold);

let logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    loseGold(1);
});

