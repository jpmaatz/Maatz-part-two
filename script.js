let golfName = prompt("Welcome to GC mini golf! What is your name?");
let holeNum = Number(prompt("Hi, " + golfName + "! " + "Would you like to play 3 or 6 holes?"));
//let refresh = alert("Refresh your screen and try again!");

var currentHole = 0;
let totalPutt=0
for (let i = 0; i < holeNum; i++) {
    currentHole++;
    var puttCount = Number(prompt("How many putts for hole " + currentHole + "? (par: 3)"));
    totalPutt +=puttCount;
}

/*if (holeNum != 6 || holeNum != 3) {
    prompt(refresh);
 
 }
*/

// 3 Par Selection
if (holeNum === 3) {
    var parTotal = 9;
    console.log("Par for 3 holes is " + parTotal + "...");
    calcu = (parTotal - totalPutt);
    if (calcu === 0) {
        console.log("Good game, " + golfName + "! Your total par was: " + calcu);
    }
    if (calcu > 0) {
        console.log("Great job, " + golfName + "! Your total par was: " + (-1 * calcu));
    }
    if (calcu < 0) {
        console.log("Nice try, " + golfName + "... Your total par was: " + "+" + (-1 * calcu));
    }


}

// 6 Par Selection
else if (holeNum === 6) {
    var parTotal = 18;
    console.log("Par for 6 holes is " + parTotal + "...");
    calcu = (parTotal - totalPutt);
    if (calcu === 0) {
        console.log("Good game, " + golfName + "! Your total par was: " + calcu);
    }
    if (calcu > 0) {
        console.log("Great job, " + golfName + "! Your total par was: " + (-1 * calcu));
    }
    if (calcu < 0) {
        console.log("Nice try, " + golfName + "... Your total par was: " + "+" + (-1 * calcu));
    }
}

