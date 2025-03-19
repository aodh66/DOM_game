export function gameOver (turnManager, boardNode) {
    const message = document.createElement('div')
    message.className = 'game-over'

    if (turnManager.player()) {
        message.innerHTML = `<h2 class="text-info">Game Over</h2> <p class="text-info">Computer has won! </p>`
    } else {
        message.innerHTML = `<h2 class="text-info">Game Over</h2> <p class="text-info">Player has won! </p>`
    }
    
    boardNode.replaceChildren(message)
}