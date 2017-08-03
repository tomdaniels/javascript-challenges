function reverseArray(myArray){
  var newArray = [];
   for (var i = myArray.length -1; i >= 0; i--) {
     newArray.push(myArray[i]);
   }
   return newArray;
}

var myArray = [1, 20, 10, 100, 2];
var resultArray = reverseArray(myArray);
console.log('Challenge 2: Reverse');
console.log(resultArray);
