/*
*Get the Helloworld page and display it
*/

exports.helloworld = function(req, res){
	res.render('helloworld', { title: 'Welcome!' });
};