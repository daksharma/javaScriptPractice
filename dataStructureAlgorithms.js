var randNum = [];
for(var count = 0; count <= 50; count++) {
  randNum.push(Math.floor(Math.random() *100));
}
console.log("Random Numbers:\n" + randNum.toString() + "\n");

//---------------------------------------------
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
console.log("Sorted Numbers:");
console.log(mergeSort(randNum).toString());

//---------------------------------------------
