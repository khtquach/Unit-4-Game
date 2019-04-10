$(document).ready(() => {


    $(document).on("click", ".crystal", runGame);
    //I declared this out here because if i declared it inside runGame, it would set to zero everytime a crystal is clicked
    var totalScore = 0;
    function runGame() {

        //grabs the variable value from the html crytal that was clicked
        console.log($(this).attr("value"));

        //adds the score to total score
        var scoreToAdd = parseInt($(this).attr("value"));
        totalScore += scoreToAdd;
        //
        var wins = parseInt($(this).attr("point"));
        // document.textContent = wins;
        // $("#wins").text(wins);
        var losses = parseInt($(this).attr("point"));
        // document.textContent = losses;
        // $("#losses").text(losses);

        //prints the totalscore to the totalscore div 
        $("#totalscore").text(totalScore);
        //prints out the wins + losses
        // $("#wins").text(wins);
        // $("#losses").text(losses);

        }
        var randomCrystalNumber = Math.floor(Math.random() * 12 + 1);
        var playerNumber = "";
        var Score = 0;

        var randomNumber = Math.floor(Math.random() * 100);
        document.textContent = randomNumber;
        $("#randomnumber").text(randomNumber);

        //Player's wins/losses
        var wins
        if (randomNumber === playerNumber) {
            wins++;
            alert("you did it!");
            reset();
        }
        var losses
        if (playerNumber != randomNumber) {
            losses++;
            alert("try again!");
            reset();
        }
 function reset() {
            var randomNumber = Math.floor(Math.random() * 120 + 19);
            console.log(randomNumber);
            totalScore = 0;
       
    }



})



