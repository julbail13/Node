var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.render('index.html');
});

app.listen(8080, function(){
	console.log('Server is Up');
});
