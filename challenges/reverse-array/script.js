function commonArrayElements(myArray){
  var i = 0;
  for (i = myArray.length - 1; i >= 0; i--)
    console.log(myArray[i]);
}

var myArray = [1, 20, 10, 100, 2];
var resultArray = commonArrayElements(myArray);
console.log(resultArray);
