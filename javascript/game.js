
$(document).ready(function() {

// Intial Variables

// Random Number between 19-120 id="number-to-guess"
var computerPick = Math.floor(Math.random() * (121 - 19) + 19);
console.log("Computer Pick: " + computerPick);

// score board variables
var wins = 0;
console.log("Wins: " + wins);

var losses = 0;
console.log("Losses: " + losses);

var crystalTotal = 0;
console.log("Crystal Total: " + crystalTotal);

// Red Crystal Random number between 1-12 OnClick id="red"-->
var redGem = Math.floor(Math.random() * 12)+1; 
$("#red").html("<img src=" + "images/red-crystal.jpg" + " value=" + redGem + ">");
console.log("Red Crystal: " + redGem);

// Blue Crystal Random number between 1-12 OnClick id="blue"
var blueGem = Math.floor(Math.random() * 12)+1; 
$("#blue").html("<img src=" + "images/blue-crystal.jpg" + " value=" + redGem + ">");
console.log("Blue Crystal: " + blueGem);

// Orange Crystal Random number between 1-12 OnClick id="orange"
var orangeGem = Math.floor(Math.random() * 12)+1; 
$("#orange").html("<img src=" + "images/orange-crystal.jpg" + " value=" + redGem + ">");
console.log("Orange Crystal: " + orangeGem);

// Green Crystal Random number between 1-12 OnClick id="green"
var greenGem = Math.floor(Math.random() * 12)+1; 
$("#green").html("<img src=" + "images/green-crystal.jpg" + " value=" + redGem + ">");
console.log("Green Crystal: " + greenGem);


$("#red").click(function(){
    CrystalClicked(this);
});
$("#blue").click(function(){
    CrystalClicked(this);
});
$("#orange").click(function(){
    CrystalClicked(this);
});
$("#green").click(function(){
    CrystalClicked(this);
});


function reset () {
    computerPick = Math.floor(Math.random() * (121 - 19) + 19); 
        console.log("computerPick: " + computerPick); 
    $(".random-number").html(computerPick); 

    crystalTotal = 0; 
    $(".crystal-total").html(crystalTotal); 
// -------------------------------------------------------
    redGem = Math.floor(Math.random() * 12)+1; 
    $("#red").html("<img src=" + "images/red-crystal.jpg" + " value=" + redGem + ">");
    console.log("Red Crystal: " + redGem);

    blueGem = Math.floor(Math.random() * 12)+1; 
    $("#blue").html("<img src=" + "images/blue-crystal.jpg" + " value=" + blueGem + ">");
    console.log("Blue Crystal: " + blueGem);

    orangeGem = Math.floor(Math.random() * 12)+1; 
    $("#orange").html("<img src=" + "images/orange-crystal.jpg" + " value=" + orangeGem + ">");
    console.log("Orange Crystal: " + orangeGem);

    greenGem = Math.floor(Math.random() * 12)+1; 
    $("#green").html("<img src=" + "images/green-crystal.jpg" + " value=" + greenGem + ">");
    console.log("Green Crystal: " + greenGem);
// ------------------------------------------------------
    $(".crystals").on("click", function () {
    var newTotal = crystalTotal += parseInt($(this).attr("value")); 
        console.log("New Score: " + newTotal); 
    $(".crystal-total").html(newTotal); 

    if(newTotal === computerPick) { 
        wins++ ; 
        $(".gamesWon").html("Wins: " + wins); 
            console.log("Wins: " + wins); 
            reset(); 
    
    } 

    else if(newTotal > computerPick) {
        losses++ ; 
        $(".gamesLost").html("Losses: " + losses); 
            console.log("Losses: " + losses); 
            reset(); 
    }    

    });
}

});

