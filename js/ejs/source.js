var ejs = require('ejs'),
var template = ejs.render('index.ejs', {
	user: {
		name: "qin"
	}
}, '');
template();