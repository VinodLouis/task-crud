var MongoClient = require('mongodb').MongoClient;
var database = require('./db');
var mongodb = require('mongodb');

module.exports = {
    insertTask:function(data,cb){
        database.db.collection("task").insertOne(data,function(err,dt){
            if(err){
                return cb(err,null);
            }
            return cb(null,data);
        });
    },
    editTask:function(id,data,cb){
        var where = {"_id":new mongodb.ObjectID(id)}
        database.db.collection("task").updateOne(where,{$set:data},function(err,dt){
            if(err){
                return cb(err,null);
            }
            return cb(null,dt);
        });
    },
    deleteTask:function(id,cb){
        database.db.collection("task").deleteOne({"_id": new mongodb.ObjectID(id)},function(err,dt){
            if(err){
                return cb(err,null);
            }
            return cb(null,dt);
        });
    },
    getSingleTask:function(id,cb){
        database.db.collection("task").findOne({"_id":new mongodb.ObjectID(id)},function(err,dt){
            if(err){
                return cb(err,null);
            }
            return cb(null,dt);
        });
    },
    getAllTask:function(data,cb){
        database.db.collection("task").find().toArray(function(err,dt){
            if(err){
                return cb(err,null);
            }
            return cb(null,dt);
        });
    }
}