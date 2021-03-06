
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
  console.log("The magic of reverse: " + reverseNumber(number) + "\n");
} else {
  console.log("There must be something wrong with the number\n");
}

// Function
function reverseNumber(someNumber) {
  var numToString  = someNumber.toString();
  var splitRevJoin = numToString.split("").reverse().join("");
  var revNumber    = Number(splitRevJoin);
  return revNumber;
}

//------------------------------------------
// Loops
console.log("Going to run for a loop ;) ");
var numArray = []; // array decleration
for(var x = 0; x <= 20; x++) {
  numArray.push(x);
}
console.log(numArray.toString());
console.log("Loop Ended...\n");
//------------------------------------------


//------------------------------------------

console.log("Going to run a while...");
var counter = 0;
while(counter < 10) {
  console.log("Counter: " + counter);
  counter++;
}
console.log("Hey, it's been a while...\n");
//------------------------------------------

var kindofnumber = 123456456456;
console.log("These are Numbers:\t" + kindofnumber);
var userNumArray = kindofnumber.toString().split("").map(Number);
//userNumArray = Number(kindofnumber.split("").join(""));
console.log("Array of digits:\t" + userNumArray + "\n");

var sentence = "The Sentence: \"The Quick Brown Fox Jumped Over the Lazy Dog\"";
console.log(sentence);
var individualWords = sentence.split(" ");
console.log("Sentence into words:");
for(var c = 0; c < individualWords.length; c++) {
  console.log("Word " + c + " : " + individualWords[c]);
}
console.log("\n");

var someString = "Is this changed?";
console.log(someString);
someString = "this has to be changed";
console.log(someString);


var numArray = [1,2,3,4,5,6,7,8,9,10];
for(var count = 0; count < numArray.length; count++) {
    console.log(numArray[count]);
}

function doubleNum(sNum) {
    return sNum * 2;
}
var doubleNumArray = [];
for(var counter = 0; counter < numArray.length; counter++) {
    doubleNumArray.push(doubleNum(numArray[i]));
}

var numDoubleNum = {};
for (var i = 0; (i < numArray.length && i < doubleNumArray.length); i++) {
    numDoubleNum[numArray[i]] = doubleNum(numArray[i]);
}

for (var props in numDoubleNum) {
    console.log(props + " : " + numDoubleNum[props]);
}

//------------------------------------------
console.log("Find a Name of the number...");
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
