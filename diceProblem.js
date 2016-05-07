// Dice Problem
var rl = require("readline");
var dice1side = [0,1,2,3,7,8];
var dice2side = [1,2,3,4,5,6];
var userDice1Side;
var userDice2Side;

console.log("Dice Problem.....\n");
console.log("Given 2 dices with 6 faces each. (dice is a cube)\n");
console.log("How would you display the number of the month using the two dice?");
console.log("ex: 01 first day or month, 15 day on month, so on so forth.\nNo addition or subtraction of the two dices");
console.log("Each digit is represented by each dice\n");

var diceQuestion = rl.createInterface(process.stdin, process.stdout);
diceQuestion.question("Enter the sequence of the first dice faces: ", function(dice1Sides) {
  diceQuestion.question("Enter second dice faces sequence: ", function(dice2Sides){
    userDice1Side = dice1Sides.toString().split('').map(Number);
    userDice2Side = dice2Sides.toString().split('').map(Number);
    console.log("Dice 1 sequence you entered: " + userDice1Side);
    console.log("Dice 2 sequence you entered: " + userDice2Side);
    console.log("Actual sequence: " + dice1side);
    console.log("Actual sequence: " + dice2side);
    if ((userDice1Side.toString() === dice1side.toString()) && (userDice1Side.length === dice1side.length) &&
        (userDice2Side.toString() === dice2side.toString()) && (userDice2Side.length === dice2side.length)) {
      console.log("You're wondering why, what about 9\nYou can use 6 as a 9 if you flip it (or in this case just twist the dice 180 degrees)");
    } else {
      console.log("Your sequence was not correct.\nPlease try again!");
    }
    process.exit();
  });
});
