import { nanoid } from "https://cdn.skypack.dev/nanoid@4.0.0";

export class GridSquare {
    constructor(isShip = false, selected = false) {
        this._id = nanoid()
        this.isShip = isShip
        this.selected = selected
    }

    chooseGridSquare() {
        this.selected = true;
    }

    makeGridSquareShip() {
        this.isShip = true;
    }
}

//Each player has a gridsquareApp assigned to them? 
//render appropriate one on each turn?

export class GridSquareManager {
    constructor({gridSquares, player}) {
        this.gridSquares = gridSquares;
        this.player = player;
    }

    findGridSquareByID(id) {
       return this.gridSquares.find((tile) => {
            return tile._id === id;
        })
    }


    shipToGridSquare(id) {
       const gridSquare = this.findGridSquareByID(id)
       gridSquare.makeGridSquareShip()
       console.log(gridSquare)
       return gridSquare;
    }
}