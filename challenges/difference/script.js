function differentArrayElements(array1, array2){
  newArray = [];
  for (var i = 0; i < array1.length; i++){
    array2.filter(function(arrayCheck){
      if (arrayCheck === array1[i]){
        newArray.pop(arrayCheck);
      }
    });
    return newArray;
  }
}

var array1 = [1, 20, 10, 100, 2];
var array2 = [500, 2, 20, 200];
var resultArray = differentArrayElements(array1, array2);
console.log(resultArray);
