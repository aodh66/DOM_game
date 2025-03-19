export function gameOver (turnManager, boardNode) {
    const message = document.createElement('div')
    message.className = 'game-over'

    if (turnManager.player()) {
        message.innerHTML = `<h2>Game Over</h2> <p>Computer has won! </p>`
    } else {
        message.innerHTML = `<h2>Game Over</h2> <p>Player has won! </p>`
    }
    
    boardNode.replaceChildren(message)
}