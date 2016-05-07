
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
console.log("Going to run a for loop");
var numArray = []; // array decleration
for(var x = 0; x <= 20; x++) {
  numArray.push(x);
}
console.log(numArray.toString());
console.log("Loop Ended...");

console.log("Going to run a while loop");
var counter = 0;
while(counter < 10) {
  console.log("Counter: " + counter);
  counter++;
}

var kindofnumber = "123456456456";
var userNumArray = kindofnumber.split("").map(Number);
//userNumArray = Number(kindofnumber.split("").join(""));
console.log(Number(kindofnumber));
console.log(userNumArray);

var sentence = "The Quick Brown Fox Jumped Over the Lazy Dog";
var individualWords = sentence.split(" ");
for(var c = 0; c < individualWords.length; c++) {
  console.log("Word " + c + " : " + individualWords[c]);
}

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

// readline works in Node but prompt works in browser so switch accordingly
var rl = require("readline");
var askUser = rl.createInterface(process.stdin, process.stdout);
askUser.question("Enter a number of the month (1-12): ", function(monthNumber) {
  console.log(nameOfMonth[monthNumber-1]);
  process.exit();
});
//var monthNum = prompt("Enter a number of the month (1-12): ");
//console.log(nameOfMonth[monthNum-1].toString());
