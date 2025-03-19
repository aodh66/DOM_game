export function gameOver (turnManager, boardNode) {
    const message = document.createElement('div')
    message.className = 'game-over bg-dark text-info'

    if (turnManager.player()) {
        message.innerHTML = `<h1>Game Over</h1> <p>Computer has won!</p>`
    } else {
        message.innerHTML = `<h1>Game Over</h1> <p>Player has won!</p>`
    }
    
    boardNode.replaceChildren(message)
}