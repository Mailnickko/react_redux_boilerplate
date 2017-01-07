var path = require('path');
var express = require('express');
var webpack = require('webpack');
var open = require('open');
var compression = require('compression');

var app = express();

require('./middleware')(app, express);
app.use(compression());
app.use(express.static(path.join(__dirname, '/../dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(8000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8000');
});
