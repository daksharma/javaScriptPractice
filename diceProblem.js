// Dice Problem
var rl = require("readline");
var dice1side = [0,1,2,3,4,5];
var dice2side = [0,1,2,6,7,8];
var userDice1Side;
var userDice2Side;

console.log("Dice Problem.....\n");
console.log("Given 2 dices with 6 faces each. (dice is a cube)\n");
console.log("How would you display the number of the month using the two dice?");
console.log("ex: 01 first day of the month, 15 day of the month, etc.\nNo addition or subtraction of the two dices");
console.log("Each digit is represented by each dice. 6 sides to a dice. 6digit sequence\n");

var diceQuestion = rl.createInterface(process.stdin, process.stdout);
diceQuestion.question("Enter the sequence of the first dice faces (w/o spaces): ", function(dice1Sides) {
  diceQuestion.question("Enter second dice faces sequence: ", function(dice2Sides){
    userDice1Side = dice1Sides.toString().split('').map(Number);
    userDice2Side = dice2Sides.toString().split('').map(Number);
    console.log("");
    console.log("Dice 1 - You entered:\t" + userDice1Side);
    console.log("Dice 2 - You entered:\t" + userDice2Side);
    console.log("");
    console.log("Actual sequence:\t" + dice1side);
    console.log("Actual sequence:\t" + dice2side);
    console.log("");
    if ((userDice1Side.toString() === dice1side.toString()) && (userDice1Side.length === dice1side.length) &&
        (userDice2Side.toString() === dice2side.toString()) && (userDice2Side.length === dice2side.length)) {
      console.log("You're wondering why, what about 9?");
      console.log("You can use 6 as a 9 if you flip it (or in this case just twist the dice 180 degrees");
    } else {
      console.log("Your sequence was not correct.\nPlease try again!");
    }
    process.exit();
  });
});
