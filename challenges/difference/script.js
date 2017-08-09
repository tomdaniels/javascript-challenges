function differentArrayElements(array1, array2){
  var myarr = array1.filter(function(item) {
      return !array2.includes(item);
  });
  var myarr2 = array2.filter(function(value) {
    return !array1.includes(value);
  })
  var result = myarr.concat(myarr2);
  return result.sort(function(number1, number2) {
    return (number1 - number2);
  });
}
var array1 = [1, 20, 10, 100, 2];
var array2 = [500, 2, 20, 200];
var resultArray = differentArrayElements(array1, array2);
console.log('Challenge 5: Remove Duplicate Values')
console.log(resultArray);
