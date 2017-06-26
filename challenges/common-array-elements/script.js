function commonArrayElements(array1, array2){
  var results = [];
  var newArray = array1.map(function(arrayScan){
    array2.filter(function(checkArray2){
      if (checkArray2 === arrayScan)
      results.push(arrayScan)
    });
  });
  return results
}
var array1 = [1, 20, 10, 100, 2];
var array2 = [500, 2, 20, 200];
var resultArray = commonArrayElements(array1, array2);
console.log(resultArray);
