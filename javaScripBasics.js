
// basic variables
var number    = 80085;
var name      = "Daksh Sharma";
var rate      = 1.5;
var greetings = "Hello there, " + name;
var isTrue    = true;

// outputting to terminal/console
console.log("The number is " + number);
console.log(greetings);
console.log("This has to be " + isTrue);
console.log("Video speed is " + rate + " times the normal speed");


// conditions
if (isTrue) {
  console.log("The magic of reverse: " + reverseNumber(number));
} else {
  console.log("There must be something wrong with the number");
}

// Function
function reverseNumber(someNumber) {
  var numToString  = someNumber.toString();
  var splitRevJoin = numToString.split("").reverse().join("");
  var revNumber    = Number(splitRevJoin);
  return revNumber;
}


// Loops
console.log("Going to run a loop");
var numArray = []; // array decleration
for(var x = 0; x < 10; x++) {
  numArray.push(x);
}
console.log(numArray.toString());

var nameOfMonth = ["January","February"
                            ,"March"
                            ,"April"
                            ,"May"
                            ,"June"
                            ,"July"
                            ,"August"
                            ,"September"
                            ,"October"
                            ,"November"
                            ,"December"
                          ];
// prompt only works in console.
var rl = require("readline");
var askUser = rl.createInterface(process.stdin, process.stdout);
askUser.question("Enter number from 0 11: ", function(monthNumber) {
  console.log(nameOfMonth[monthNumber]);
  process.exit();
});
//console.log("Enter a number from 0 to 11: ");
//var monthNum = readline();
//console.log(nameOfMonth[monthNum].toString());
