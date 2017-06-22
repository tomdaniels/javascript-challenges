/* Demonstrates a manual way to filter through an Array.
*  function removeNumberFromArray(myArray, number){
*    var i = 0;
*    var newArray = [];
*    for (i = 0; i < myArray.length; i++) {
*      var numberToCheck = myArray[i];
*      if (numberToCheck == number) {
*        console.log('gotchya');
*      } else {
*        newArray.push(numberToCheck);
*      }
*    }
*    return newArray;
*   }
*  var myArray = [1, 2, 3, 4, 5];
*  var number = 4;
*  var resultArray = removeNumberFromArray(myArray, number);
*  console.log(resultArray); */

// Uses filter function instead of manual loop.
function removeNumberFromArray(myArray, number){
  return myArray.filter(function(num) {return num != number});
}

var myArray = [1, 2, 3, 4, 5];
var number = 4;
var resultArray = removeNumberFromArray(myArray, number);
console.log(resultArray);
