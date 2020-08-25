var app = angular.module('TodoApp', []);
app.controller('TodoCtrl', function($scope) {
 
 $scope.todos = [];
 $scope.TotalTodos;

 $scope.getTotalTodos = function(){
       return $scope.todos.length;
 }

 $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
};

 $scope.clearCompleted = function(){
        for(var i=0;i<$scope.todos.length;i++){
            if($scope.todos[i].done)
            $scope.todos.splice(i,1);
        }
 }

});

