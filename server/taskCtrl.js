var MongoClient = require('mongodb').MongoClient;
var taskService = require('./taskService');
var errorResponse = require('./response').error;
var successResponse = require('./response').success;
module.exports = {
    insertTask:function(req,res){
      

       taskService.insertTask(req.body,function(err,dt){
        if(err){
                    return res.send(errorResponse(err));
                }
                res.send(successResponse(dt,null))
       });
    },
    editTask:function(req,res){
       taskService.editTask(req.params.id,req.body,function(err,dt){
               if(err){
                           return res.send(errorResponse(err));
                       }
                       res.send(successResponse(dt,null))
              });
    },
    deleteTask:function(req,res){
         taskService.deleteTask(req.params.id,function(err,dt){
                        if(err){
                                    return res.send(errorResponse(err));
                                }
                                res.send(successResponse(dt,null))
                       });
    },
    getSingleTask:function(req,res){
        //console.log(req.params.id);
        taskService.getSingleTask(req.params.id,function(err,dt){
                if(err){
                    return res.send(errorResponse(err));
                }
                res.send(successResponse(dt,null))
               });
    },
    getAllTask:function(req,res){
       taskService.getAllTask(null,function(err,dt){
        if(err){
            return res.send(errorResponse(err));
        }
        res.send(successResponse(dt,null))
       });
    }
}