var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = 8082;
var task = require('./server/taskRoute');
var dbs = require("./server/db");

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/styles",  express.static(__dirname + '/public/stylesheets'));
app.use("/scripts", express.static(__dirname + '/public/javascripts'));
app.use("/img",  express.static(__dirname + '/public/images'));
app.use("/templates",  express.static(__dirname + '/public/tpls'));


app.use('/task', task);
dbs.initialize(function(err) {
  if(err){
    console.log("mongo not running");
  }

  app.listen(port,"0.0.0.0",function(){
          console.log("App successfully started at port " + port);
  });
});



