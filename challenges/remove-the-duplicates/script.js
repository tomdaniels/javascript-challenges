function noDuplicates(array1, array2) {
	var myarr = array1.concat(array2);
	var results = myarr.filter(function(item, index, self) {
		return index == self.indexOf(item);
	});
	return results.sort(function(value1, value2) {
		return (value1 - value2);
	});
}

var array1 = [10, 18, 1, 4, 7, 22];
var array2 = [4, 5, 6, 18, 19, 22];
var resultArray = noDuplicates(array1, array2);
console.log('Challenge 7: Remove Duplicate Values');
console.log(resultArray);
