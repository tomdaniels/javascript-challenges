function titleCaseMap(title) {
	const myNewTitle = title.toLowerCase().split(' ');
	const results = myNewTitle.map(function(index) {
		return index.charAt(0).toUpperCase() + index.slice(1);
	});
	return results.join(' ');
}

var title = "my very loNg anD bEaUtIfUl tItlE!";
var resultTitle = titleCaseMap(title);
console.log('Challenge 6: Title Case')
console.log(resultTitle);
