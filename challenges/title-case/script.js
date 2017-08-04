function titleCase(title) {
	var title = title.toLowerCase().split(' ');
		for (var i = 0; i < title.length; i++) {
			title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
	}
	return title.join(' ');
}

var title = "my very loNg anD bEaUtIfUl tItlE!";
var resultTitle = titleCase(title);
console.log('Challenge 6: Title Case')
console.log(resultTitle);
