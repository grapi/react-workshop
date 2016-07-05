var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var portNumber = 3000;

app.listen(portNumber, function(){
    console.log('test server listening on port ' + portNumber);
});

