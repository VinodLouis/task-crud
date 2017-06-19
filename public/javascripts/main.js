var app = angular.module("task",["ngRoute","angularjs-datetime-picker","ngToast"]);

app.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl : "templates/list.html",
        controller : "listCtrl",
        controllerAs : "vm"
    })
    .when("/tasks", {
        templateUrl : "templates/task.html",
        controller : "createCtrl",
        controllerAs : "vm"
    })
    .when("/tasks/:id", {
        templateUrl : "templates/task.html",
        controller : "editCtrl",
        controllerAs : "vm"
    })
    .otherwise({redirectTo:'/'});
});