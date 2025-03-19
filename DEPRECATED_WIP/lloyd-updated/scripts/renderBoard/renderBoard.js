import { GameTurns } from "../turnManager.js";
import { createGridSquareHTML } from "./createGridSquareHTML.js";


//render board based on turn and provide a title for which players turn

export const renderBoard = ({ boards, boardNode, titleNode, turnManager, HTMLfn }) => {
    //determine which board to render based on turn
    const boardManager = whichBoard(turnManager, boards)

    //Update title to show which turn it is
    const turnHeading = turnTitle(turnManager)
    titleNode.replaceChildren(turnHeading)

    //create fragment to limit DOM calls
    const fragment = document.createDocumentFragment()

    //create grid squares
    for (const gridSquare of boardManager.board) {
        fragment.append(HTMLfn(gridSquare))
    }

    //append to DOM
    boardNode.replaceChildren(fragment)
}


export const whichBoard = (turnManager, boards) => {
    //determine which board to render - initially allow 5 set up clicks per player

    //for turns 1 - 6 players place "ships"
    if (turnManager.turn < 6) {
        //player 1 needs to see own board to set ships
        if (!turnManager.player()) {
            console.log(`Player 1 board`)
            return boards.player1Board;
        } else {
            console.log(`Player 2 board`)
            return boards.player2Board;
        }
    } else {
        // for remaining turns alternative board is rendered so player is selecting hits on other board
        if (!turnManager.player()) {
            console.log(`Player 2 board`)
            return boards.player2Board;
        } else {
            console.log(`Player 1 board`)
            return boards.player1Board;
        }
    }
}

const turnTitle = (turnManager) => {
    //create title for board based on which players turn
    const heading = document.createElement('h1')
    if (turnManager.player()) {
        heading.textContent = `Computer turn`
    } else {
        heading.textContent = `Player 1 turn`
    }
    return heading;
}