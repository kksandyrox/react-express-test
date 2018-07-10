var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var app = express();

app.use('/api/v1', router);

// app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));


app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../client', 'index.html'))
})

module.exports = app;