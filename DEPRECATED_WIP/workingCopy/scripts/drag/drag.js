const hostSquares = [];
const width = 10;

const directions = ["horizontal", "vertical"];

const shipsArray = [
    // {
    //     name: 'destroyer',
    //     directions: {
    //         horizontal: [0, 1],
    //         vertical: [0, width]
    //     }
    // },
    {
        name: 'submarine',
        directions: {
            horizontal: [0, 1, 2],
            vertical: [0, width, width * 2]
        }

    },
    {
        name: 'cruiser',
        directions: {
            horizontal: [0, 1, 2],
            vertical: [0, width, width * 2]
        }
    },
    {
        name: 'battleship',
        directions: {
            horizontal: [0, 1, 2, 3],
            vertical: [0, width, width * 2, width * 3]
        }
    }
    // ,
    // {
    //     name: 'carrier',
    //     directions: {
    //         horizontal: [0, 1, 2, 3, 4],
    //         vertical: [0, width, width * 2, width * 3, width * 4]
    //     }
    // }
]



document.addEventListener('DOMContentLoaded', () => {
    const hostGrid = document.querySelector('.grid-host');
    const shipsContainer = document.querySelector('.ships-container');
    const ships = document.querySelectorAll('.ship');

    // this is covered in the main code - comment out for now

    function renderBoard(grid, squares, width) {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.dataset.id = i;
            grid.appendChild(square);
            squares.push(square);
        }
    }

    renderBoard(hostGrid, hostSquares, width);



    shipsContainer.addEventListener('click', e => {
        if (e.target.parentElement.matches('div.ship'))
            rotate(e.target.parentElement);
    })


    // const target = {
    //     shipNameWithId:'',
    //     ship:'',
    //     shipLength: 0
    // }

    shipsContainer.addEventListener('mousedown', e => {
        grabShip(e, target);
    })

    ships.forEach(ship => ship.addEventListener('dragstart', e => { dragStart(e, target) }));

    hostGrid.addEventListener('dragover', dragOver);
    hostGrid.addEventListener('dragenter', dragEnter);
    hostGrid.addEventListener('dragleave', dragLeave);
    hostGrid.addEventListener('drop', e => { dragDrop(e, target, hostSquares, shipsContainer) });
    hostGrid.addEventListener('dragend', dragEnd);



    // randomizeButton.addEventListener('click', e => {
    //     if(shipsContainer.childElementCount == 5){
    //         shipsArray.forEach(ship => generate(directions, ship, hostSquares));
    //         [...shipsContainer.childNodes].forEach(node => node.remove());
    //     }else {
    //         reset(e,shipsContainer);
    //         shipsArray.forEach(ship => generate(directions, ship, hostSquares));
    //         [...shipsContainer.childNodes].forEach(node => node.remove());
    //     }
    // });


})




export function rotate(ship) {
    console.log(ship)
    console.log(ship.classList[1])
    ship.classList.toggle(`${ship.classList[1]}-vertical`)
}

export function grabShip(e, target) {

    target['shipNameWithId'] = e.target.id;
}

export function dragStart(e, target) {

    target['ship'] = e.target;
    target['shipLength'] = e.target.childElementCount;
}

export function dragOver(e) {
    e.preventDefault();
}
export function dragEnter(e) {
    e.preventDefault();
}
export function dragLeave() {

}

export function dragEnd() {

}


// update this function to work with the grid reference system A1 etc.
export function dragDrop(e, target, squares, container, board) {
    console.log(e, target, squares, container)
    let draggedShipNameWithLastId = target.ship.lastElementChild.id;
    console.log(draggedShipNameWithLastId)
    let draggedShipClass = draggedShipNameWithLastId.slice(0, -2);
    let draggedShipLastIndex = parseInt(draggedShipNameWithLastId.substr(-1));
    console.log(draggedShipLastIndex, `last id`)
    console.log()
    let draggedShipIndex = parseInt(target.shipNameWithId.substr(-1));
    console.log(draggedShipIndex, `draggedShipIndex`)
    // let receivingSquare = parseInt(e.target.dataset.id);

    //change this code to work with the 1A grid format. 
    let receivingSquare = e.target.dataset.id;
    console.log(receivingSquare, `receivingSquare`)  //this outputs a grid reference of the B2 format
    const recievingSquareNum = receivingSquare.match(/(\d+)/);
    console.log(recievingSquareNum[0], `num`)
    const recievingSquareText = receivingSquare.match(/[a-zA-Z]/g);
    console.log(recievingSquareText[0], `tezt`)
    console.log(recievingSquareText[0].charCodeAt(0), `tezt int`)



    // let droppedShipFirstId =  receivingSquare - draggedShipIndex;
    // let droppedShipLastId = draggedShipLastIndex - draggedShipIndex + receivingSquare;

    let isVertical = [...target.ship.classList].some(className => className.includes('vertical'));
    console.log(isVertical, `is vertical?`)

    if (!isVertical) {
        // calculate ids based on position
        const droppedShipFirstId = recievingSquareText[0].charCodeAt(0) - draggedShipIndex;
        let droppedShipLastId = draggedShipLastIndex - draggedShipIndex + recievingSquareText[0].charCodeAt(0);

        let current = shipsArray.find(ship => ship.name === draggedShipClass).directions.horizontal;

        //calculte the ids of the ship from the id and the current ship horizontal values
        const shipGridSquaresHorizontal = []

        //Grid squares in horizontal direction go 0A 0B etc. using the characters etc.
        // get the grid squares from the board using the ids built previously
        for (const shipIndex of current) {
            const gridId = `${recievingSquareNum[0]}${String.fromCharCode(droppedShipFirstId + shipIndex)}`
            const gridSquare = board.getGridSquareByID(gridId)
            shipGridSquaresHorizontal.push(gridSquare)
        }

        //update this to work with the board manager 
        let isTaken = shipGridSquaresHorizontal.some(square => square.isShip);


        console.log(isTaken, `is taken`)

        //check if on same row - remove for now - need to add back in

        // if( Math.floor(droppedShipLastId/10) === Math.floor(receivingSquare/10) && !isTaken){
        // 
        // for(let i = 0; i < target.shipLength; i++){

        //     //change this code to add the isShip property to the GridSquare so it is re-rendered each time
        //     squares[receivingSquare - draggedShipIndex + i].classList.add('taken', draggedShipClass, 'ship')

        //     console.log(board, `board`)

        console.log(Math.floor(droppedShipLastId / 10))
        console.log((recievingSquareText[0].charCodeAt(0) / 10))


        // I COULDNT UNDERSTAND THIS BIT??
        // if (Math.floor(droppedShipLastId/10) === Math.floor((recievingSquareText[0].charCodeAt(0)/10) && !isTaken)) {
        if (!isTaken) {
            //set ship on the gridSquares
            for (const square of shipGridSquaresHorizontal) {
                square.makeShip()
            }
console.log('removing ship from container')
container.removeChild(target.ship);
}

// }
// }else{
    
    // }
    //is vertical - note change to direction horizontal as this provides correct values for the grid system
} else {
    let current = shipsArray.find(ship => ship.name === draggedShipClass).directions.horizontal;
    
    const droppedShipFirstId = recievingSquareNum[0] - draggedShipIndex;
    
    //calculte the ids of the ship from the id and the current ship horizontal values
    const shipGridSquaresVertical = []
    
    //Grid squares in horizontal direction go 0A 0B etc. using the characters etc.
    // get the grid squares from the board using the ids built previously
    for (const shipIndex of current) {
        const gridId = `${droppedShipFirstId + shipIndex}${recievingSquareText[0]}`
        
        console.log(gridId)
        const gridSquare = board.getGridSquareByID(gridId)
        shipGridSquaresVertical.push(gridSquare)
    }
    
        //update this to work with the board manager 
        let isTaken = shipGridSquaresVertical.some(square => square.isShip);
        
        //  i couldnt work out the if check logic
        if (!isTaken) {
            for (const square of shipGridSquaresVertical) {
                square.makeShip()
            }
            
            console.log('trying to remove ship from container')
            container.removeChild(target.ship);
        }



        // let isTaken = current.some(index => squares[droppedShipFirstId +index].classList.contains('taken'));

        // if( receivingSquare + (target.shipLength-1) * 10 < 100 && !isTaken){
        //     for(let i = 0; i < target.shipLength; i++){
        //         squares[receivingSquare - draggedShipIndex + (10 * i)].classList.add('taken', draggedShipClass, 'ship')
        //     }
        //     container.removeChild(target.ship);
        // }
    }
    // if (!container.querySelector('.ship')) allShipsInPlace = true;
}

