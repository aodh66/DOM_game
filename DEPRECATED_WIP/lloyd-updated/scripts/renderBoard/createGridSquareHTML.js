
export const createGridSquareHTML = ({_id, isShip, selected, shipVisible}) => {

    //create standard grid square
    const gridSquare = document.createElement('div')
    gridSquare.className = 'grid-square'
    gridSquare.dataset.id = _id

    // change visual based on grid square data
    if (isShip) {
        gridSquare.classList.add('ship')
    }

    if (selected) {
        gridSquare.classList.add('selected')
    }

    // add a class to the tile if the ship is to be visible - set to false for the computers ships - turns on when hit.
    if (shipVisible) {
        gridSquare.classList.add('ship-visible')
    }

    return gridSquare
}