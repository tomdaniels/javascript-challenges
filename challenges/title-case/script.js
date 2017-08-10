function titleCase(title) {
	var title = title.toLowerCase().split(' ');
		title = title.forEach(function(index){
			title.forEach(index).charAt(0).toUpperCase() + title(index).slice(1);
		});
	return title.join(' ');
}

var title = "my very loNg anD bEaUtIfUl tItlE!";
var resultTitle = titleCase(title);
console.log('Challenge 6: Title Case')
console.log(resultTitle);
