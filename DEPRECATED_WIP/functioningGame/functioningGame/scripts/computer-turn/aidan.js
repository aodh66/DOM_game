// Make a game:

// # Battleship
// ## Basic version
// Singleplayer, computer places ships, you are guessing which tiles have enemy ships, and attempting to beat your lowest number of guesses to hit all ships.

// - render a grid ============================================
// - Have rules so ships are lines and a set size
//   - Only let ships go in vertical or horizontal lines?

// - Randomly place ships for the player to try and hit
//   - give it a toggleable class on selection =======================================
//   - random number generator to pick column, then another to pick row for starting ship tile ======================================
//     - another random gen to pick horizontal or vertical ========================================
//   TODO abstract this out into a single function to generate one ship made of 3-4 pieces

//* --------- //
//* VARIABLES //
//* --------- //
// Bounding values for selecting ship squares
//   The limit bound is used to stop ships from going off the grid tileset
const lowBound = 1;
const highBound = 10;
const limitBound = 8;

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

//* Function to generate Y axis for a single point [returns object of 3 numbers for the ship]
function getNumberAxis(low, high) {
  const num = getRndInteger(low - 1, high - 1);
  const num2 = num + 1;
  const num3 = num + 2;
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
  };
}
// console.log('get y axis number function', getNumberAxis(lowBound, highBound))

//* Function to generate X axis for a single point [returns object of 3 letters for the ship]
function getLetterAxis(low, high) {
  const num = getRndInteger(low, high);
  const letter = (num + 9).toString(36).toUpperCase();
  const letter2 = (num + 10).toString(36).toUpperCase();
  const letter3 = (num + 11).toString(36).toUpperCase();
  // DEBUG
  // Logs number and letter for X axis, make sure they are correct
  // console.log(num + letter + letter2 + letter3)
  return {
    letter: letter,
    letter2: letter2,
    letter3: letter3,
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
    tile3: tile3,
  };
}
// console.log('genvertship', genVertShip())

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
    tile3: tile3,
  };
}
// console.log('genhoirzship', genHorizShip())

//* Function to apply the class of '.ship' to the elements returned by genVertShip and genHorizShip, it will then be placed with them inside genShip
function shipClassifier(ship) {
  // grabs the tile codes of the ship squares
  const tile1 = String(ship.tile1);
  const tile2 = String(ship.tile2);
  const tile3 = String(ship.tile3);
  //   grabs the elements from the document

  // const shipTile1 = document.getElementsByClassName(tile1);
  // const shipTile2 = document.getElementsByClassName(tile2);
  // const shipTile3 = document.getElementsByClassName(tile3);

  //Lloyd - updated this section to  get the elements by the dataset property set using the method on the grid manager class

  // to do this the gridManager class needs to be made available to this function.
  const shipTile1 = document.getElementsByClassName(tile1);
  const shipTile2 = document.getElementsByClassName(tile2);
  const shipTile3 = document.getElementsByClassName(tile3);

  // adds the ship class to the elements
  shipTile1[0].classList.add("ship");
  shipTile2[0].classList.add("ship");
  shipTile3[0].classList.add("ship");
  // DEBUG
  // console.log('getelementbyclassname', document.getElementsByClassName(tile1))
  // console.log(shipTile1[0])
  // console.log(shipTile2[0])
  // console.log(shipTile3[0])
}

//* Function that checks if 3 ship tiles returned by genVertShip and genHorizShip are already picked as a ship [returns a boolean, ship = true, not ship = false]
function shipChecker(ship) {
  // grabs the tile codes of the ship squares
  const tile1 = String(ship.tile1);
  const tile2 = String(ship.tile2);
  const tile3 = String(ship.tile3);

  //   grabs the elements from the document
  const shipTile1 = document.getElementsByClassName(tile1);
  const shipTile2 = document.getElementsByClassName(tile2);
  const shipTile3 = document.getElementsByClassName(tile3);
  // DEBUG
  // console.log('getelementbyclassname', document.getElementsByClassName(tile1))
  // console.log(shipTile1[0])
  // console.log(shipTile2[0])
  // console.log(shipTile3[0])

  // checks if the ship class is on the elements
  if (
    shipTile1[0].classList.contains("ship") ||
    shipTile2[0].classList.contains("ship") ||
    shipTile3[0].classList.contains("ship")
  ) {
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
  let dir = direction();
  // DEBUG
  // Check the direction of the ship is correct
  // console.log(dir);
  // generates a ship based on the direction
  if (dir === "vertical") {
    return genVertShip();
  } else {
    return genHorizShip();
  }
}

//* Function that incorporates the others
//*     Generates a ship
//*     Checks if it's already a ship
//*     If it's already a ship, generates another ship and repeats
//*     If it's not a ship, classifies those tiles as ship tiles
export function genValidShip() {
  // Create a new ship
  let newShip = genShip();
  // Check that the ship is valid
  do {
    newShip = genShip();
  } while (shipChecker(newShip));
  // insert the valid ship into the page
  shipClassifier(newShip);
//   console.log("valid ship generated");
}

//* ------------ //
//* TEST SECTION //
//* ------------ //
//* Testing Calls
const testVertShip = genVertShip();
const testHorizShip = genHorizShip();
const testShip1 = genShip();
const testShip2 = genShip();
// console.log("Test Vertical Ship", testVertShip);
// console.log("Test Horizontal Ship", testHorizShip);
console.log("Test Random Ship 1", testShip1);
console.log("Test Random Ship 2", testShip2);
// console.log('test random ship', genShip())

// shipClassifier(testHorizShip);
// shipClassifier(testVertShip);
// shipClassifier(testShip1);
// shipClassifier(testShip2);
// shipChecker(testHorizShip)
// console.log(shipChecker(testVertShip))
genValidShip();
genValidShip();
genValidShip();
// genValidShip();
// genValidShip();
// genValidShip();
// genValidShip();
// genValidShip();
// genValidShip();
// genValidShip();
// genValidShip();

// - have the tiles be clickable =====================================
//   - check how event listeners work with regards to clicking specific tiles ==============================
//   - give it a toggleable class on click =========================================

//selectors
const board = document.querySelector(".board");

//bindings
board.addEventListener("click", (event) => {
  // console.log(event)
  const selectedTile = event.target;
  // console.log(selectedTile.classList)
  selectedTile.classList.add("shot");
  // console.log(selectedTile.classList)

  if (selectedTile.classList.contains("ship")) {
    selectedTile.classList.add("destroyed");
    console.log("hit");
  } else {
    console.log("miss");
  }
});

// - detect if a ship is below on click ==========================
//   - then render ship
// - Track number of clicks for score
//   - eventlistener that increments score variable on click
// - Button to reset and play again