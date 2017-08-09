function commonArrayElements(array1, array2){
  var myarr = array1.filter(function(item) {
      return array2.includes(item);
  });
  return myarr
}
var array1 = [1, 20, 10, 100, 2];
var array2 = [500, 2, 20, 200];
var resultArray = commonArrayElements(array1, array2);
console.log('Challenge 4: Common Values');
console.log(resultArray);
