var express = require('express');
var ts = require('./timestamp');
var path = require('path');
var app = express.createServer();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:timestamp', function (req, res) {
  res.send(ts.print(req.params.timestamp));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Timestamp app is listening');
});