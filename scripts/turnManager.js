//turnManager
export class GameTurns {
    constructor(placeTurns) {
        this.turn = 0
    }


 //function to determine which player - return 0 for player1 and 1 for player2
    player() {
         return this.turn % 2 === 0 ? 0 : 1;
    }


    turnComplete() {
        this.turn += 1;
        console.log(`turn updated. Turn: ${this.turn}`)
    }


}