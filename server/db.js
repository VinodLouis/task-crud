var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/tasks';

module.exports = {


     initialize: function(next){
        
        this.initializeDB(next);
     },

     initializeDB: function(next){
        MongoClient.connect(url, function(err, db) {
                  if(err){
                    next(err);
                  }
                  module.exports.db = db;
                  next();

        });


     }
}