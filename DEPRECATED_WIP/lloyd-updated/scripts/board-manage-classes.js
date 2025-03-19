export class GridSquare {
    constructor(id) {
        this._id = id;
        this.isShip = false,
        this.selected = false
        this.shipVisible = true;
    }

    selectGridSquare() {
        this.selected = true;
    }

    makeShip() {
        this.isShip = true;
    }

    makeComputersShip() {
        this.isShip = true;
        this.shipVisible = false;
    }
}

export class GridManager {
    constructor(playerName) {
        this.board = [],
        this.player = playerName
    }

    //create a single grid square by id
    createGridSquare(id) {
        const gridSquare = new GridSquare(id)
        this.board.push(gridSquare)
        return gridSquare
    }

    //set up the board with a total number of squares - must be equal sizes

    //gridsize doesn't work as css grid layout would need updating to match
    setupBoard(gridsize = 10) {
        //Make the grids named by row and column as a grid layout
        //numbers 1 -10
        for (let i = 0; i < gridsize; i++) {
            //letters 
            for (let j = 65; j < 65 + gridsize; j++) {

                //combine to make grid reference
                const id = String(i) + String.fromCharCode(j)
                // console.log(id)

                //create a grid square with this ID.
                this.createGridSquare(id)
            }
        }
    }


    //read
    getGridSquareByID(id) {

        const gridSquare = this.board.find((square) => {
            return square._id === id;
        })
        return gridSquare;
    }

    checkGameOver() {
        //check tiles to see if not hit.  isShip but not selected
        let shipTileNum = 0
        let shipHitsNum = 0

        for (const square of this.board) {
            if (square.isShip) {
                shipTileNum++;
                if(square.selected) {
                    shipHitsNum++;
                }
            }
        }

        console.log(shipTileNum, `Ship tiles`)
        console.log(shipHitsNum, `Ship hits`)

        if (shipHitsNum === shipTileNum) {
            return true
        } else {
            return false
        }
    }

    //update
    makeShip(gridSquare) {
        gridSquare.makeShip()
    }
    
    selectGridSquare(gridSquare) {
        gridSquare.selectGridSquare()
    }

    makeShipById(id) {
        console.log(id)
        const gridSquare = this.getGridSquareByID(id)
        console.log(gridSquare, `grid square made ship by ID`)
        gridSquare.makeShip()
    }
    

    //this selects for the game - ie shoot
    selectGridSquareById(id) {
        const gridSquare = this.getGridSquareByID(id)
        gridSquare.selectGridSquare()
        return gridSquare;
    }

    //delete
    resetBoard() {
        this.board = []
    }
}


