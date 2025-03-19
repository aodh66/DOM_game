const hostSquares = [];
const width = 10;

const directions = ["horizontal", "vertical"];

const shipsArray = [
    {
        name: 'destroyer',
        directions: {
            horizontal: [0, 1],
            vertical: [0, width]
        }
    },
    {
        name: 'submarine',
        directions: {
            horizontal: [0, 1, 2],
            vertical: [0, width, width*2]
        }

    },
    {
        name: 'cruiser',
        directions: {
            horizontal: [0, 1, 2],
            vertical: [0, width, width*2]
        }
    },
    {
        name: 'battleship',
        directions: {
            horizontal: [0, 1, 2, 3],
            vertical: [0, width, width*2, width*3]
        }
    },
    {
        name: 'carrier',
        directions: {
            horizontal: [0, 1, 2, 3, 4],
            vertical: [0, width, width*2, width*3, width*4]
        }
    }
]




document.addEventListener('DOMContentLoaded', () => {
    const hostGrid = document.querySelector('.grid-host');
    
    const shipsContainer = document.querySelector('.ships-container');
    const ships = document.querySelectorAll('.ship');


    function renderBoard(grid, squares, width) {
      for(let i = 0; i< width * width; i++){
      const square = document.createElement('div');
      square.dataset.id = i;
      grid.appendChild(square);
      squares.push(square);
  }
}

    renderBoard(hostGrid, hostSquares, width);
    


    shipsContainer.addEventListener('click', e => {
        if(e.target.parentElement.matches('div.ship'))
            rotate(e.target.parentElement);
    })

    
    const target = {
        shipNameWithId:'',
        ship:'',
        shipLength: 0
    }
    
    shipsContainer.addEventListener('mousedown', e => {
        grabShip(e, target);
    })
    
    ships.forEach(ship => ship.addEventListener('dragstart', e => {dragStart(e, target)}));
    
    hostGrid.addEventListener('dragover', dragOver);
    hostGrid.addEventListener('dragenter', dragEnter);
    hostGrid.addEventListener('dragleave', dragLeave);
    hostGrid.addEventListener('drop', e => {dragDrop(e, target, hostSquares, shipsContainer)});
    hostGrid.addEventListener('dragend', dragEnd);

    

    randomizeButton.addEventListener('click', e => {
        if(shipsContainer.childElementCount == 5){
            shipsArray.forEach(ship => generate(directions, ship, hostSquares));
            [...shipsContainer.childNodes].forEach(node => node.remove());
        }else {
            reset(e,shipsContainer);
            shipsArray.forEach(ship => generate(directions, ship, hostSquares));
            [...shipsContainer.childNodes].forEach(node => node.remove());
        }
    });

    
})



function rotate(ship){
    // console.log(ship)
    // console.log(ship.classList[1])
    ship.classList.toggle(`${ship.classList[1]}-vertical`)
}

function grabShip(e, target){
    
    target['shipNameWithId'] = e.target.id;
}

function dragStart(e, target){
    
    target['ship'] = e.target;
    target['shipLength'] = e.target.childElementCount;
}

function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){
    
}

function dragEnd(){

}

function dragDrop(e, target, squares, container){
    console.log(squares, `squares`)
    let draggedShipNameWithLastId = target.ship.lastElementChild.id;
    let draggedShipClass = draggedShipNameWithLastId.slice(0, -2);
    let draggedShipLastIndex = parseInt(draggedShipNameWithLastId.substr(-1));
    let draggedShipIndex = parseInt(target.shipNameWithId.substr(-1));
    let receivingSquare = parseInt(e.target.dataset.id);
    let droppedShipFirstId =  receivingSquare - draggedShipIndex;
    let droppedShipLastId = draggedShipLastIndex - draggedShipIndex + receivingSquare;

    let isVertical = [...target.ship.classList].some(className => className.includes('vertical'));

    if(!isVertical){
        
        let current = shipsArray.find(ship => ship.name === draggedShipClass).directions.horizontal;
        let isTaken = current.some(index => squares[droppedShipFirstId +index].classList.contains('taken'));
        if( Math.floor(droppedShipLastId/10) === Math.floor(receivingSquare/10) && !isTaken){
            
            for(let i = 0; i < target.shipLength; i++){
                squares[receivingSquare - draggedShipIndex + i].classList.add('taken', draggedShipClass, 'ship')
            }
            container.removeChild(target.ship);
        }else{
            
        }
    }else{
        let current = shipsArray.find(ship => ship.name === draggedShipClass).directions.vertical;
        let isTaken = current.some(index => squares[droppedShipFirstId +index].classList.contains('taken'));

        if( receivingSquare + (target.shipLength-1) * 10 < 100 && !isTaken){
            for(let i = 0; i < target.shipLength; i++){
                squares[receivingSquare - draggedShipIndex + (10 * i)].classList.add('taken', draggedShipClass, 'ship')
            }
            container.removeChild(target.ship);
        }
    }
    if(!container.querySelector('.ship')) allShipsInPlace = true;
}

