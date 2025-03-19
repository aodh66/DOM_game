//* --------- //
//* VARIABLES //
//* --------- //
// Bounding values for selecting ship squares
//   The limit bound is used to stop ships from going off the grid tileset
const lowBound = 1;
const highBound = 10;
const limitBound = 8;
const limitBound4 = 7;

//* --------- //
//* Functions //
//* --------- //
//* Function to generate a random integer between an upper and lower bound, inclusive of lower and upper bound [returns number]
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//* Function to generate a random direction for the ship [returns 'horizontal' or 'vertical' string]
function direction() {
  const dir = getRndInteger(0, 1);
  if (dir) {
    return "vertical";
  } else {
    return "horizontal";
  }
}
// console.log(direction())

//* Function to generate a random length for the ship [returns the number 3 or 4]
function length() {
  const len = getRndInteger(3, 4);
  if (len === 3) {
    return 3;
  } else {
    return 4;
  }
}
// console.log(direction())

//* Function to generate Y axis for a single point [returns object of 3 numbers for the ship]
function getNumberAxis(low, high) {
  const num = getRndInteger(low - 1, high - 1);
  const num2 = num + 1;
  const num3 = num + 2;
  const num4 = num + 3;
  // DEBUG
  // console.log('numberaxisobject', {
  //     num: String(num),
  //     num2: String(num2),
  //     num3: String(num3)
  // })
  return {
    num: String(num),
    num2: String(num2),
    num3: String(num3),
    num4: String(num4)
  };
}
// console.log('get y axis number function', getNumberAxis(lowBound, highBound))

//* Function to generate X axis for a single point [returns object of 3 letters for the ship]
function getLetterAxis(low, high) {
  const num = getRndInteger(low, high);
  const letter = (num + 9).toString(36).toUpperCase();
  const letter2 = (num + 10).toString(36).toUpperCase();
  const letter3 = (num + 11).toString(36).toUpperCase();
  const letter4 = (num + 12).toString(36).toUpperCase();
  // DEBUG
  // Logs number and letter for X axis, make sure they are correct
  // console.log(num + letter + letter2 + letter3)
  return {
    letter: letter,
    letter2: letter2,
    letter3: letter3,
    letter4: letter4
  };
}
// console.log('get x axis letter function', getLetterAxis(lowBound, highBound))

//* Function to randomly generate a vertical ship [returns an object with the 3 tile codes as strings]
function genVertShip() {
  // generate tiles
  const tileNumbers = getNumberAxis(lowBound, limitBound);
  const tileLetters = getLetterAxis(lowBound, highBound);
  // get tile 1 coordinates
  const tile1 = String(tileNumbers.num + tileLetters.letter);
  // get tile 2 coordinates
  const tile2 = String(tileNumbers.num2 + tileLetters.letter);
  // get tile 3 coordinates
  const tile3 = String(tileNumbers.num3 + tileLetters.letter);
  // DEBUG
  // console.log('get letter axis object', tile1X)
  // console.log('tile 1 class code', tile1)
  // console.log('tile 2 class code', tile2)
  // console.log('tile 2 class code', tile3)
  // console.log('vertship class codes', tile1, tile2, tile3)

  // returns vertical ship object with classes inside
  return {
    tile1: tile1,
    tile2: tile2,
    tile3: tile3
  };
}
// console.log('genvertship', genVertShip())

//* Function to randomly generate a 4 tile vertical ship [returns an object with the 4 tile codes as strings]
function genVertShip4() {
  // generate tiles
  const tileNumbers = getNumberAxis(lowBound, limitBound4);
  const tileLetters = getLetterAxis(lowBound, highBound);
  // get tile 1 coordinates
  const tile1 = String(tileNumbers.num + tileLetters.letter);
  // get tile 2 coordinates
  const tile2 = String(tileNumbers.num2 + tileLetters.letter);
  // get tile 3 coordinates
  const tile3 = String(tileNumbers.num3 + tileLetters.letter);
  // get tile 4 coordinates
  const tile4 = String(tileNumbers.num4 + tileLetters.letter);
  // DEBUG
  // console.log('get letter axis object', tile1X)
  // console.log('tile 1 class code', tile1)
  // console.log('tile 2 class code', tile2)
  // console.log('tile 3 class code', tile3)
  // console.log('tile 4 class code', tile4)
  // console.log('vertship4 class codes', tile1, tile2, tile3, tile4)

  // returns vertical ship object with classes inside
  return {
    tile1: tile1,
    tile2: tile2,
    tile3: tile3,
    tile4: tile4
  };
}
// console.log('genvertship', genVertShip4())

//* Function to randomly generate a horizontal ship [returns an object with the 3 tile codes as strings]
function genHorizShip() {
  // generate tiles
  const tileNumbers = getNumberAxis(lowBound, highBound);
  const tileLetters = getLetterAxis(lowBound, limitBound);
  // get tile 1 coordinates
  const tile1 = String(tileNumbers.num + tileLetters.letter);
  // get tile 2 coordinates
  const tile2 = String(tileNumbers.num + tileLetters.letter2);
  // get tile 3 coordinates
  const tile3 = String(tileNumbers.num + tileLetters.letter3);
  // DEBUG
  // console.log('get letter axis object', tile1X)
  // console.log('tile 1 class code', tile1)
  // console.log('tile 2 class code', tile2)
  // console.log('tile 2 class code', tile3)
  // console.log('horizship class codes', tile1, tile2, tile3)

  // returns horizontal ship object with classes inside
  return {
    tile1: tile1,
    tile2: tile2,
    tile3: tile3
  };
}
// console.log('genhoirzship', genHorizShip())

//* Function to randomly generate a 4 tile horizontal ship [returns an object with the 4 tile codes as strings]
function genHorizShip4() {
  // generate tiles
  const tileNumbers = getNumberAxis(lowBound, highBound);
  const tileLetters = getLetterAxis(lowBound, limitBound4);
  // get tile 1 coordinates
  const tile1 = String(tileNumbers.num + tileLetters.letter);
  // get tile 2 coordinates
  const tile2 = String(tileNumbers.num + tileLetters.letter2);
  // get tile 3 coordinates
  const tile3 = String(tileNumbers.num + tileLetters.letter3);
  // get tile 4 coordinates
  const tile4 = String(tileNumbers.num + tileLetters.letter4);
  // DEBUG
  // console.log('get letter axis object', tile1X)
  // console.log('tile 1 class code', tile1)
  // console.log('tile 2 class code', tile2)
  // console.log('tile 3 class code', tile3)
  // console.log('tile 4 class code', tile4)
  // console.log('horizship4 class codes', tile1, tile2, tile3, tile4)

  // returns horizontal ship object with classes inside
  return {
    tile1: tile1,
    tile2: tile2,
    tile3: tile3,
    tile4: tile4
  };
}
// console.log('genhoirzship', genHorizShip())

//* Function to apply the class of '.ship' to the elements returned by genShip
function shipClassifier(ship, board) {
  // console.log(ship)
  // grabs the tile codes of the ship squares
  const tile1_id = String(ship.tile1);
  const tile2_id = String(ship.tile2);
  const tile3_id = String(ship.tile3);

  //   grabs the elements from the board using method on board manager class rather than ids
  
  const shipTile1 = board.getGridSquareByID(tile1_id)
  const shipTile2 = board.getGridSquareByID(tile2_id)
  const shipTile3 = board.getGridSquareByID(tile3_id);

  shipTile1.makeComputersShip()
  shipTile2.makeComputersShip()
  shipTile3.makeComputersShip()
  // DEBUG
  // console.log(shipTile1)
  // console.log(shipTile2)
  // console.log(shipTile3)
}

//* Function to apply the class of '.ship' to the elements returned by genShip4
function shipClassifier4(ship, board) {
  // console.log(ship)
  // grabs the tile codes of the ship squares
  const tile1_id = String(ship.tile1);
  const tile2_id = String(ship.tile2);
  const tile3_id = String(ship.tile3);
  const tile4_id = String(ship.tile4);

  //   grabs the elements from the board using method on board manager class rather than ids
  
  const shipTile1 = board.getGridSquareByID(tile1_id)
  const shipTile2 = board.getGridSquareByID(tile2_id)
  const shipTile3 = board.getGridSquareByID(tile3_id);
  const shipTile4 = board.getGridSquareByID(tile4_id);

  // add the ship class to these grid squares using the make  computers ship method in the GridSquare class.
  shipTile1.makeComputersShip()
  shipTile2.makeComputersShip()
  shipTile3.makeComputersShip()
  shipTile4.makeComputersShip()
  // DEBUG
  // console.log(shipTile1)
  // console.log(shipTile2)
  // console.log(shipTile3)
  // console.log(shipTile4)
}

//* Function that checks if 3 ship tiles returned by genVertShip and genHorizShip are already picked as a ship [returns a boolean, ship = true, not ship = false]
function shipChecker(ship, board) {
  // grabs the tile codes of the ship squares
  const tile1_id = String(ship.tile1);
  const tile2_id = String(ship.tile2);
  const tile3_id = String(ship.tile3);

  //   grabs the elements from the document - lloyd changed to get the tiles using the manager methods.

  // console.log(board)
  const shipTile1 = board.getGridSquareByID(tile1_id)
  const shipTile2 = board.getGridSquareByID(tile2_id)
  const shipTile3 = board.getGridSquareByID(tile3_id);
  // DEBUG
  // console.log(shipTile1.isShip)
  // console.log(shipTile2)
  // console.log(shipTile3)

  // checks if the tiles are already a ship using the isShip attribute on the gridsquare class
  if (shipTile1.isShip || shipTile2.isShip || shipTile3.isShip) {
    // console.log('This is already a ship')
    return true;
  } else {
    // console.log('This is a new valid ship')
    return false;
  }
}

//* Function that checks if 4 ship tiles returned by genShip4 are already picked as a ship [returns a boolean, ship = true, not ship = false]
function shipChecker4(ship, board) {
  // grabs the tile codes of the ship squares
  const tile1_id = String(ship.tile1);
  const tile2_id = String(ship.tile2);
  const tile3_id = String(ship.tile3);
  const tile4_id = String(ship.tile4);

  //   grabs the elements from the document - lloyd changed to get the tiles using the manager methods.

  // console.log(board)
  const shipTile1 = board.getGridSquareByID(tile1_id)
  const shipTile2 = board.getGridSquareByID(tile2_id)
  const shipTile3 = board.getGridSquareByID(tile3_id);
  const shipTile4 = board.getGridSquareByID(tile4_id);
  // DEBUG
  // console.log(shipTile1.isShip)
  // console.log(shipTile2)
  // console.log(shipTile3)
  // console.log(shipTile4)

  // checks if the tiles are already a ship using the isShip attribute on the gridsquare class
  if (shipTile1.isShip || shipTile2.isShip || shipTile3.isShip || shipTile4.isShip) {
    // console.log('This is already a ship')
    return true;
  } else {
    // console.log('This is a new valid ship')
    return false;
  }
}

//* Function that randomly picks horizontal or vertical, and generates a random ship on that axis [returns the generated ship object with the 3 tile codes as strings]
function genShip() {
  // Gets random direction for the ship
  let shipDir = direction();
  // DEBUG
  // Check the direction of the ship is correct
  // console.log(dir);
  // generates a ship based on the direction
  if (shipDir === "vertical") {
    return genVertShip();
  } else if(shipDir === "horizontal") {
    return genHorizShip();
  } else {
    console.log('ship generation error')
  }
}

//* Function that randomly picks horizontal or vertical, and generates a random 4 tile ship on that axis [returns the generated ship object with the 4 tile codes as strings]
function genShip4() {
  // Gets random direction for the ship
  let shipDir = direction();
  // DEBUG
  // Check the direction of the ship is correct
  // console.log(dir);
  // generates a ship based on the direction
if(shipDir === "vertical") {
    return genVertShip4();
  } else if(shipDir === "horizontal") {
    return genHorizShip4();
  } else {
    console.log('ship4 generation error')
  }
}

//* Function that incorporates the others
//*     Generates a ship
//*     Checks if it's already a ship
//*     If it's already a ship, generates another ship and repeats
//*     If it's not a ship, classifies those tiles as ship tiles
export function genValidShip(board) {
  // Create a new ship
  let newShip = genShip();
  let shipLength = length()

  if(shipLength === 3) {
  // Check that the ship is valid
  do {
    newShip = genShip();
  } while (shipChecker(newShip, board));
  // insert the valid ship into the page on the board
  shipClassifier(newShip, board);
  } else if(shipLength === 4){
    // Check that the ship is valid
  do {
    newShip = genShip4();
  } while (shipChecker4(newShip, board));
  // insert the valid ship into the page on the board
  shipClassifier4(newShip, board);
  } else {
    console.log('valid ship generation bug')
  }
//   console.log("valid ship generated");
}

  //* Function to le the computer pick a single random grid square
  function genSquare() {
    // generate tiles
    const tileNumbers = getNumberAxis(lowBound, highBound);
    const tileLetters = getLetterAxis(lowBound, highBound);
    // get tile 1 coordinates
    const tile1 = String(tileNumbers.num + tileLetters.letter);
    // DEBUG
    // console.log('get letter axis object', tile1X)
    console.log('gensquare class code', tile1)
    // console.log('vertship class codes', tile1, tile2, tile3)
    
    // returns single tile object with class inside
    return {
      tile1: tile1
    };
  }
  // console.log('genSquare', genSquare())
  
  //* Function that checks if tiles returned by genSingleSquare has already been shot [returns a boolean, shot = true, not shot = false]
  function shotChecker(shot, board) {
    // grabs the tile codes of the shot squares
    const tile1_id = String(shot.tile1);
    //   grabs the elements from the document
    const shotTile1 = board.selectGridSquareById(tile1_id)
    // DEBUG
    // console.log('what the computer is trying to select', tile1_id)
    // console.log('the board to try and use selection methods on', board)
    // console.log('shot tile 1', shotTile1)
        // console.log('shot tile selected', shotTile1.selected)

    return shotTile1.selected
  }
  
  //* Function to apply the class of '.shot' to the element returned by genSquare
  function shotClassifier(shot, board) {
    // grabs the tile codes of the shot squares
    const tile1_id = String(shot.tile1);
    //   grabs the elements from the document
    console.log('what the computer is trying to select [classifier]', tile1_id)
    console.log('the board to try and use selection methods on [classifier]', board)
    const shotTile1 = board.selectGridSquareById(tile1_id)
    // adds the shot class to the elements
    console.log('shot classifier class list', shotTile1)
    // shotTile1.classList.add("selected");
    // DEBUG
    // console.log(shotTile1)
  }
  
  //* Function that randomly shoots a grid square by giving it the class of 'shot'
  export function shootRandomGridSquare(board) {
    // Create a new shot
    let newShot = genSquare();
    // Check that the shot is valid
    do {
      newShot = genSquare();
    } while (!shotChecker(newShot, board));
    // insert the valid ship into the page
    shotClassifier(newShot, board);
    //   console.log("valid shot generated");
  }

//* ------------ //
//* TEST SECTION //
//* ------------ //
//* Testing Calls
// genValidShip();
// shootRandomGridSquare()
