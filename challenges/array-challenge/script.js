

function mergeAndSortArrays(array1, array2) {
  //ref: http://www.javascriptkit.com/javatutors/arraysort.shtml
  var joinedArray = array1.concat(array2);
  return joinedArray.sort(function(number1, number2){
    return (number1 - number2);
  });
}

var array1 = [1, 10, 100];
var array2 = [2, 20, 200];
var resultArray = mergeAndSortArrays(array1, array2);
console.log('Challenge 1: Merge & Sort');
console.log(resultArray);
