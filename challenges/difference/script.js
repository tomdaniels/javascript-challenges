function filterArray(array1, array2) {
  return array1.filter(function(item) {
    return !array2.includes(item);
  });
}

function differentArrayElements(array1, array2) {
  const uniqueItemsArray1 = filterArray(array1, array2);
  const uniqueItemsArray2 = filterArray(array2, array1);
  return uniqueItemsArray1.concat(uniqueItemsArray2).sort();
}

var array1 = [1, 20, 10, 100, 2];
var array2 = [500, 2, 20, 200];
var resultArray = differentArrayElements(array1, array2);
console.log('Challenge 5: Remove Duplicate Values')
console.log(resultArray);
