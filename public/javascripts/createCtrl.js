angular.module("task").controller('createCtrl',['taskService','$location','ngToast',function(taskService,$location,ngToast){
        var vm = this;
        vm.task = {
            title:"",
            desc:"",
            taskdt:""
        }

        vm.createTask = function(isAdd){
            taskService.createTask(this.task).then(function(success){
                ngToast.create("Task Created successfully");
                if(isAdd){
                    vm.task = {
                        title:"",
                        desc:"",
                        taskdt:""
                    }
                }else{
                    $location.path("/");
                }
            },function(err){
                ngToast.create("Failed Try again !");
            });
        }

}])