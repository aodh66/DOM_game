//imports
import { renderBoard, createGridSquareHTML } from "./DOM-methods.js";
import { GridSquare, GridSquareManager } from "./grid-manager.js";

//variables and functions
const createTiles = (number, GridSquare) => {
    const tiles = []
    for (let i = 0; i < number; i++) {
        const newTile = new GridSquare()
        tiles.push(newTile)
    }
    return tiles
}

//state

//keep track of turn

//keep track of player board
const playerApp = new GridSquareManager({
    gridSquares: createTiles(100, GridSquare),
    player: `lloyd`
})


//selectors
const board = document.querySelector('.board')

//actions
renderBoard(board, playerApp.gridSquares, createGridSquareHTML)


//bindings
board.addEventListener('click', (event) => {
    console.log(event)
    const selectedTile = event.target
    const selectedTileId = event.target.dataset.id

    //find tile by id and select
    playerApp.shipToGridSquare(selectedTileId)
    renderBoard(board, playerApp.gridSquares, createGridSquareHTML)
})
