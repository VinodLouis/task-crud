angular.module("task").controller('editCtrl',['taskService','$routeParams','ngToast','$location',function(taskService,$routeParams,ngToast,$location){

        var vm = this;
        vm.taskId = $routeParams.id;


        taskService.getTask(this.taskId).then(function(success){
            vm.task = {
                        title:success.data.data.title,
                        desc:success.data.data.desc,
                        taskdt:success.data.data.taskdt
                    }
        },function(err){
            $location.path("/tasks/");
        });


        vm.createTask = function(isAdd){
            delete vm.task._id;
            taskService.editTask(vm.taskId,vm.task).then(function(success){
                ngToast.create("Task Updated successfully");
                if(isAdd){
                    $location.path("/tasks/");
                }else{
                    $location.path("/");
                }
            },function(err){
                ngToast.create("Failed, try again!");
            });
        }

}])