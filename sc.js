var express = require('express');
var fs = require('fs');
var htmlfile = 'soundindex.html';

var app = express();

app.configure(function(){app.use(express.static(__dirname + '/public/'));});

app.get('/', function(request, response) {
	var html = fs.readFileSync(htmlfile).toString();
	response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
