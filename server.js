var express = require('express');
var ts = require('./timestamp');
var app = express();

app.get('/:timestamp', function (req, res) {
  res.send(ts.print(req.params.timestamp));
});

app.listen(8080, function () {
  console.log('Timestamp app listening on port 8080!');
});