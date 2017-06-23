function commonArrayElements(array1, array2){
  var results = [];
  for (var i = 0; i < array1.length; ++i){
    array2.filter(function(array1){
      if (array1[i] === array2[i]){
        results.push(array1, array2);
      };
    })
  }
  array2.concat(array1);
  return results;
}



/*
function commonArrayElements(array1, array2){
  for (var i = 0; i < array1.length; i++){
    array2.filter(function(value) {return value != array1[i]});
  }
}
*/

var array1 = [1, 20, 10, 100, 2];
var array2 = [500, 2, 20, 200];
var resultArray = commonArrayElements(array1, array2);
console.log(resultArray);

//for (var j = 0; j < array2.length; ++i){
