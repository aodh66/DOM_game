import { whichBoard } from "../renderBoard/renderBoard.js"
import { genValidShip } from "./aidans-code-modified.js"
import { shootRandomGridSquare } from "./aidans-code-modified.js"


//This function manages the logic for the computer having a turn
export const computerTurn = (turnManager, gameBoardsObj) => {
    console.log(`the computer is having a turn`)

    // determine which board the computer will play on using the which board function 
    const board = whichBoard(turnManager, gameBoardsObj)

    if (turnManager.turn < 6) {
        //If the total turn count is less than three the computer will set a ship using the ship generation code
        console.log('the computers board', board)
        genValidShip(board)

        console.log(board, 'this board is being passed to the computer to select a square')

    } else {
        //select square after turn 6 to show hit or miss
        //A function similar to gen valid ship to select a square could be used here. use the board.selectShipByID to shoot.
        console.log('the computers board', board)
        shootRandomGridSquare(board)
    }

    ///return board so it can be checked if the game is over.
    return board
}