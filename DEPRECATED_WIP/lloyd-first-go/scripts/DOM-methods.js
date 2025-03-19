//utility methods

export const createGridSquareHTML = ({_id, isShip}) => {
    // make the grid square
    const gridSquare = document.createElement('div');
    gridSquare.dataset.id = _id;
    gridSquare.classList.add('tile');

    if (isShip) {
        gridSquare.classList.add('ship')
        console.log('added as ship')
    }

    return gridSquare
}


export const renderBoard = (boardNode, data, HTMLfn = createGridSquareHTML) => {

    //create document fragment
    const fragment = document.createDocumentFragment()

    //loop through tile data and append to fragment
    for (const tile of data) {
        const gridSquare = HTMLfn(tile)
        fragment.append(gridSquare)
    }

    //append fragement to the board
    boardNode.replaceChildren(fragment)
}