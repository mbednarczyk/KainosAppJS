var express = require('express');
var app = express();
var db = require('./js/dbManager.js')
var http = require('http')


app.use(express.static(__dirname));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// app.get('/', function (req, res) {
//    res.sendFile(__dirname+'/index.html');
// });
app.get('#/topGenre', function(req,res){
     db.getRecords(req,res);

  //   var userHistory = db.getRecords(req,res);
		// console.log("fadsfgjhgfrggfsggh"+userHistory);
		// res.json(userHistory);
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});