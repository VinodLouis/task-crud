angular.module("task").factory('taskService',function($http){
    var taskService = {};
    var url = "/task"

    taskService.createTask = function(data){
        return $http.post(url,data);
    };

    taskService.editTask = function(id,data){
        return $http.put(url+"/"+id,data);
    };

    taskService.getTasks = function(){
        return $http.get(url);
    };

    taskService.getTask = function(id){
        return $http.get(url+"/"+id);
    };

    taskService.deleteTask = function(id){
        return $http.delete(url+"/"+id);
    };


    return taskService;
});