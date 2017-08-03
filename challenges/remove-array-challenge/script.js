// Uses filter function instead of manual loop.
function removeNumberFromArray(myArray, number){
  return myArray.filter(function(num) {return num != number});
}

var myArray = [1, 2, 3, 4, 5];
var number = 4;
var resultArray = removeNumberFromArray(myArray, number);
console.log('Challenge 3: Remove a Number');
console.log(resultArray);
