
$(document).ready(function() {

// Intial Variables

// Random Number between 19-120 id="number-to-guess"
var computerPick = Math.floor(Math.random() * (121 - 19) + 19);
console.log("Computer Pick: " + computerPick);
$("#number-to-guess").html(computerPick);

// score board variables
var wins = 0;
console.log("Wins: " + wins);
$(".gamesWon").html("Wins: " + wins);

var losses = 0;
console.log("Losses: " + losses);
$(".gamesLost").html("Losses: " + losses);

var crystalTotal = 0;
console.log("Crystal Total: " + crystalTotal);
$(".crystal-total").html("Crystal Total: " + crystalTotal);

// Red Crystal Random number between 1-12 OnClick id="red"-->
var redGem = Math.floor(Math.random() * 12)+1; 
console.log("Red Crystal: " + redGem);

// Blue Crystal Random number between 1-12 OnClick id="blue"
var blueGem = Math.floor(Math.random() * 12)+1; 
console.log("Blue Crystal: " + blueGem);

// Orange Crystal Random number between 1-12 OnClick id="orange"
var orangeGem = Math.floor(Math.random() * 12)+1; 
console.log("Orange Crystal: " + orangeGem);

// Green Crystal Random number between 1-12 OnClick id="green"
var greenGem = Math.floor(Math.random() * 12)+1; 
console.log("Green Crystal: " + greenGem);


$("#red").click(function(){
    $("#red").html("<img src=" + "images/red-crystal.jpg" + " value=" + redGem + ">");
    console.log("Red Crystal: " + redGem);
    CrystalClicked(this);
    console.log(this);
    
});
$("#blue").click(function(){
    $("#blue").html("<img src=" + "images/blue-crystal.jpg" + " value=" + blueGem + ">");
    console.log("Blue Crystal: " + blueGem);
    CrystalClicked(this);
    console.log(this);
});
$("#orange").click(function(){
    $("#orange").html("<img src=" + "images/orange-crystal.jpg" + " value=" + orangeGem + ">");
    console.log("Orange Crystal: " + orangeGem);
    CrystalClicked(this);
    console.log(this);
});
$("#green").click(function(){
    $("#green").html("<img src=" + "images/green-crystal.jpg" + " value=" + greenGem + ">");
    console.log("Green Crystal: " + greenGem);
    CrystalClicked(this);
    console.log(this);
});


//UGGGGGGGH. I GIVE UP. I DON'T KNOW HOW TO LINK THE CLICKED CRYSTAL TO THE TOTAL VALUE. THE INTERNET DOESN'T KNOW EITHER THOUGH.. SO THAT MAKES ME FEEL BETTER. 

var imageCrystal = $("<value=>");

imageCrystal.addClass("crystal-image");

$(".crystals").append(imageCrystal);

$(".crystal-image").on("click", function() {

    var newTotal = ($(this).attr("=value"));
    newTotal = parseInt(newTotal);

    crystalTotal += newTotal;


// function CrystalClicked (Crystal){
//     console.log($(Crystal).attr("id"));
    
//     var ClickedCrystal = $(Crystal).attr("id")
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
    $("#red").on("click", function () {
    var newTotal = crystalTotal += parseInt($(this).attr("value=")); 
        console.log("New Total: " + newTotal); 
    $(".crystal-total").html("Crystal Total: " + newTotal); 

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