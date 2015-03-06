var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('node is installed on server-1');
});

app.listen(process.env.PORT || 5000);
module.exports = app;