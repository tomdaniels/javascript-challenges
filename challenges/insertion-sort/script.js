function sortArray(array) {
  return array.sort(function(value1, value2) {
    return (value1 - value2);
  });
}

var array = [1, 10, 2, 20, 4, 200, 100];
var resultArray = sortArray(array);
console.log('Challenge 8: Insertion Sort');
console.log(resultArray);
