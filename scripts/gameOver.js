export function gameOver (turnManager, boardNode) {
    const message = document.createElement('div')
    message.className = 'game-over bg-dark text-info'

    if (turnManager.player()) {
        // message.innerHTML = `<h1>Game Over</h1> <p>Computer has won!</p>`
        document.getElementsByClassName("container")[0].classList.add("invisible");
        document.getElementsByClassName("game-win-loss")[0].classList.remove("invisible");
        document.getElementsByClassName("game-win-loss")[0].textContent = "Computer has won!";
    } else {
        // message.innerHTML = `<h1>Game Over</h1> <p>Player has won!</p>`
        document.getElementsByClassName("container")[0].classList.add("invisible");
        document.getElementsByClassName("game-win-loss")[0].classList.remove("invisible");
        document.getElementsByClassName("game-win-loss")[0].textContent = "You have won!";
    }
    
    boardNode.replaceChildren(message)
}