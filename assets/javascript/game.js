
//where the changing score is shown
$("#goal")

//where the wins and losses are shown; don't forget to format like "Wins: ###"
$("#wins")
$("#losses")

//images
$("#image-1")
$("#image-2")
$("#image-3")
$("#image-4")

// tallied scores from games won/lost
$("#score")


window.onload = function () {

var wins = 0;
$("#wins").text("Wins: " + wins);
var losses = 0;
$("#losses").text("Losses: " + losses);

//defines starting properties
score = 0, //sets initial score to 0
$("#score").text(score);

pointsImage1 = Math.floor(Math.random() * 10), //each crystal is assigned a number
pointsImage2 = Math.floor(Math.random() * 10),
pointsImage3 = Math.floor(Math.random() * 10),
pointsImage4 = Math.floor(Math.random() * 10),

goal = Math.floor(Math.random() * 100), //come up with a random number as goal
$("#goal").text("Target: " + goal);


//when clicked on, add crystal's number to score
$("#image-1").click(image1Click);
$("#image-2").click(image2Click);
$("#image-3").click(image3Click);
$("#image-4").click(image4Click);

function reset() {
    score = 0, //sets initial score to 0
    $("#score").text(score);

    pointsImage1 = Math.floor(Math.random() * 10), //each crystal is assigned a number
    pointsImage2 = Math.floor(Math.random() * 10),
    pointsImage3 = Math.floor(Math.random() * 10),
    pointsImage4 = Math.floor(Math.random() * 10),

    goal = Math.floor(Math.random() * 100), //come up with a random number as goal
    $("#goal").text("Target: " + goal);
}



function image1Click() {
    score = score + pointsImage1;
    $("#score").text(score); //updaate score counter 
    if (score > goal) { //if score > goal, player loses; break; game restarts
        losses = losses + 1;
        $("#losses").text("Losses: " + losses);
        reset();
    } else if (score === goal) { //if score === goal, player wins; break; game restarts
        wins = wins + 1;
        $("#wins").text("Wins: " + wins);
        reset();
    }
};

function image2Click() {
    score = score + pointsImage2;
    $("#score").text(score); //updaate score counter 
    if (score > goal) { //if score > goal, player loses; break; game restarts
        losses = losses + 1;
        $("#losses").text("Losses: " + losses);
        reset();
    } else if (score === goal) { //if score === goal, player wins; break; game restarts
        wins = wins + 1;
        $("#wins").text("Wins: " + wins);
        reset();
    }
};

function image3Click() {
    score = score + pointsImage3;
    $("#score").text(score); //updaate score counter 
    if (score > goal) { //if score > goal, player loses; break; game restarts
        losses = losses + 1;
        $("#losses").text("Losses: " + losses);
        reset();
    } else if (score === goal) { //if score === goal, player wins; break; game restarts
        wins = wins + 1;
        $("#wins").text("Wins: " + wins);
        reset();
    }
};

function image4Click() {
    score = score + pointsImage4;
    $("#score").text(score); //updaate score counter 
    if (score > goal) { //if score > goal, player loses; break; game restarts
        losses = losses + 1;
        $("#losses").text("Losses: " + losses);
        reset();
    } else if (score === goal) { //if score === goal, player wins; break; game restarts
        wins = wins + 1;
        $("#wins").text("Wins: " + wins);
        reset();
    }
};












}