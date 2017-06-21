function removeNumberFromArray(myArray, number) {
  var i = 0;
  var newArray = [];
  for (i = 0; i < myArray.length; i++) {
    var numberToCheck = myArray[i];
    if (numberToCheck == number) {
      console.log('found ya matee')
    } else {
      newArray.push(numberToCheck);
    }
  }

  return newArray;
}

var myArray = [1, 2, 3, 4, 5];
var number = 4;
var resultArray = removeNumberFromArray(myArray, number);
console.log(resultArray);
