
$(document).ready(function() {

// Intial Variables

// Random Number between 19-120 id="number-to-guess"
var computerPick = Math.floor(Math.random() * (121 - 19) + 19);
 
console.log(computerPick);

// Red Crystal Random number between 1-12 OnClick id="red"-->
var redGem = Math.floor(Math.random() * 12)+1; 

console.log(redGem);

// Blue Crystal Random number between 1-12 OnClick id="blue"
var blueGem = Math.floor(Math.random() * 12)+1; 

console.log(blueGem);

// Orange Crystal Random number between 1-12 OnClick id="orange"
var orangeGem = Math.floor(Math.random() * 12)+1; 

console.log(orangeGem);

// Green Crystal Random number between 1-12 OnClick id="green"
var greenGem = Math.floor(Math.random() * 12)+1; 

console.log(greenGem);

// assign a function to the crystals that executes/runs when a crystal is clicked. that function needs to:

    // figure out which crystal was clicked
    // figure out which number is associated to that crystal
    // add that number to the current total

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// Your game will hide this amount until the player clicks a crystal.

// When they do click one, update the player's score counter.
// Score counter adding together value of crystals clicked

// The player wins if their total score matches the random number from the beginning of the game.
// Score +1 if score counter === random number

// Game resets if score counter === random numbers

// The player loses if their score goes above the random number.
// Loss score +1 is score counter > random number

// Game resets if score counter > random number

// The game restarts whenever the player wins or loses.
// Game reset generates all new random numbers
// Game reset resets score counter to 0

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

})
