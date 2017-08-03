function differentArrayElements(array1, array2){
  var results = [];
  for (var i = 0; i < array1.length; i++) {
    var arrayLength = array1.length;
    for (var j = 0; j < arrayLength; j++) {
      if (array2[i] == array1[j]) {
        results = array1.slice(0, j).concat(array1.slice(j + 1, arrayLength));
      }
    }
  }
  return results.sort(function(number1, number2){
    return (number1 - number2);
  });
}

var array1 = [1, 20, 10, 100, 2];
var array2 = [500, 2, 20, 200];
var resultArray = differentArrayElements(array1, array2);
console.log(resultArray);
