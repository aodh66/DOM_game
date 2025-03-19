// IMPORTS
import { GridSquare, GridManager } from "./board-manage-classes.js"
import { createGridSquareHTML } from "./renderBoard/createGridSquareHTML.js"
import { renderBoard, whichBoard } from "./renderBoard/renderBoard.js"
import { GameTurns } from "./turnManager.js"
import { computerTurn } from "./computer-turn/computer-go.js"
import { gameOver } from "./gameOver.js"
import { rotate, dragStart, dragDrop, dragEnd, dragEnter, dragLeave, dragOver, grabShip} from "../../workingCopyDrag/scripts/drag/drag.js"




// VARIABLES
//flag to prevent multiple clicks per turn
let clickFlag = true;

//flag to ensure user has turn before clicking next turn btn
let turnSet = false;


//target for drag action
const target = {
    shipNameWithId:'',
    ship:'',
    shipLength: 0
}

// FUNCTIONS


// SELECTORS
const gameBoard = document.querySelector('#board')
const titleNode = document.querySelector('.turnstate-text')
const nextTurnBtn = document.querySelector('#next-turn-btn')

//drag code - selectors
const shipsContainer = document.querySelector('.ships-container');
console.log(shipsContainer)
const ships = document.querySelectorAll('.ship');

// STATE

//create boards for player 1 and player 2 seperately
const player1Board = new GridManager('Player 1')
player1Board.setupBoard()

const player2Board = new GridManager("Computer")
player2Board.setupBoard()


// game turns
const turnManager = new GameTurns()
console.log(turnManager)


// ACTIONS


//create boards to play
const gameBoardsObj = {
    player1Board: player1Board,
    player2Board: player2Board
}

//render the player1Board for game start
//create object of parameters to pass in to function as same each call

const renderBoardParams = {
    boards: gameBoardsObj,
    boardNode: gameBoard,
    titleNode: titleNode,
    turnManager: turnManager,
    HTMLfn: createGridSquareHTML
}


renderBoard(renderBoardParams)


// BINDINGS

// this currently allows for many clicks per turn - limit to selection of a single square???
gameBoard.addEventListener('click', (event) => {
    //limit selection of one square using click flag - set to false after a click and reset by turn button.
    console.log(clickFlag)

    //check for click flag and that it is player 1s go - not the computer
    if (!turnManager.player() && clickFlag) {
        //find square clicked
        const id = event.target.dataset.id

        console.log(id)

        //update properties of grid square

        //Find correct board player 1 or player 2 depending on game turns
        const board = whichBoard(turnManager, gameBoardsObj)
        //make ships when user clicks a tile before turn 6
        if (turnManager.turn < 6) {
            console.log(id, `id`)
            board.makeShipById(id)
        } else {
            //select square after turn 6 to show hit or miss
            board.selectGridSquareById(id)
        }

        //re-render board to show ship or shot
        renderBoard(renderBoardParams)

        //check if game over
         if (board.checkGameOver()) {
            //present game over winner message
            gameOver(turnManager, gameBoard)
         }

        //set flags to allow for next turn BTN to be pressed
        clickFlag = false;
        turnSet = true;
    } else {
        console.log('location selected')
    }
})

//button to move to next turn
nextTurnBtn.addEventListener('click', () => {
    //turn set checks if a ship has been set and the turn can end
    if (turnSet) {
        turnManager.turnComplete()
        
        //render the board for the next turn:
            renderBoard(renderBoardParams)
        
        //reset flags
        turnSet = false;
        clickFlag = true;

        //check if it is now the computers turn.
        if (turnManager.player()) {
            console.log('computers turn now')

            //the computer has a turn - run functions - returns board
            const board = computerTurn(turnManager, gameBoardsObj)

            //check if the game is over
            if (board.checkGameOver()) {
                gameOver(turnManager, gameBoard)
            }

            //change turn flag to allow next turn button to be pressed by the player
            turnSet = true;

            //re-render the board to show the computers choices
            renderBoard(renderBoardParams)

        }
    } else {
        console.log("need to set ship")
    }
})

//event listeners from Harrys drag code:
shipsContainer.addEventListener('mousedown', e => {
    grabShip(e, target);
})

ships.forEach(ship => ship.addEventListener('dragstart', e => {dragStart(e, target)}));

//hostGrid changed to gameBoard
//Replace host squares with the gameBoardObj and then call which board on it using the turn manager

gameBoard.addEventListener('dragover', dragOver);
gameBoard.addEventListener('dragenter', dragEnter);
gameBoard.addEventListener('dragleave', dragLeave);
//use the which board function to return the squares for the board
console.log(gameBoard.children)
gameBoard.addEventListener('drop', e => {
    if (!turnManager.player() && clickFlag) {
    dragDrop(e, target, gameBoard.children, shipsContainer, whichBoard(turnManager, gameBoardsObj))
    renderBoard(renderBoardParams)
    clickFlag = false;
    turnSet = true;
    }
});
gameBoard.addEventListener('dragend', dragEnd);


//rotate ships on click
shipsContainer.addEventListener('click', e => {
    console.log(`CLICKED SHIP`)
    if(e.target.parentElement.matches('div.ship'))
        rotate(e.target.parentElement);
})
