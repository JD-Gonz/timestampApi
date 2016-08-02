var express = require('express');
var ts = require('./timestamp');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:timestamp', function (req, res) {
  res.send(ts.print(req.params.timestamp));
});

app.listen(8080, function () {
  console.log('Timestamp app listening on port 8080!');
});