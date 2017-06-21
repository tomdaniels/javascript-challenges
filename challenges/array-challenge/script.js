

function mergeAndSortArrays(array1, array2) {
  //ref: http://www.javascriptkit.com/javatutors/arraysort.shtml
  var joinedArray = array1.concat(array2);
  return joinedArray.sort(function(a,b){
    return (a-b);
  });

}

var array1 = [1, 10, 100];
var array2 = [2, 20, 200];
var resultArray = mergeAndSortArrays(array1, array2);
console.log(resultArray);
