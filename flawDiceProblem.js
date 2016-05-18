var dice1side = [0,1,2,3,4,5];
var dice2side = [0,1,2,6,7,8];
var diceSolution = [];

console.log("Dice Possibilities:");
console.log("Dice \n[1][2]\t[2][1]");
for (var diceOne in dice1side) {
    for (var diceTwo in dice2side) {
        diceSolution.push(dice1side[diceOne] + "" + dice2side[diceTwo]);
        diceSolution.push(dice2side[diceTwo] + "" + dice1side[diceOne]);
        console.log("[" + dice1side[diceOne] + " " + dice2side[diceTwo] + "]\t[" + dice2side[diceTwo] + " " + dice1side[diceOne] + "]");
    }
}

diceSolution.push('09');
//console.log(diceSolution);


function mergeSort(someArray) {
  if (someArray.length < 2) {
    return someArray;
  }
  var middle = Number(someArray.length /2);
  var leftSide = someArray.slice(0, middle);
  var rightSide = someArray.slice(middle, someArray.length);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(left, right) {
  var sortedResult = [];
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedResult.push(left.shift());
    } else {
      sortedResult.push(right.shift());
    }
  }

  while (left.length) {
    sortedResult.push(left.shift());
  }

  while (right.length) {
    sortedResult.push(right.shift());
  }
  return sortedResult;
}

var sortedMergeResult = mergeSort(diceSolution);
var actualDays = [];
var dupRemovedNumbers = [];
for (var i = 3; i < 39; i+=1 ) {
    actualDays[i] = sortedMergeResult[i];
}


function unique(origArr) {
    var newArr = [],
        origLen = origArr.length,
        found, x, y;

    for (x = 0; x < origLen; x++) {
        found = undefined;
        for (y = 0; y < newArr.length; y++) {
            if (origArr[x] === newArr[y]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newArr.push(origArr[x]);
        }
    }
    return newArr;
}
dupRemovedNumbers = unique(actualDays);
console.log("Duplicates removed----");
console.log("Sorted Numbers:");
console.log(dupRemovedNumbers.toString().split(',').join("\n"));
