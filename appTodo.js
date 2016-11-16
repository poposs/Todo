angular.module('TodoApp', [])
.service('TodoService', function(){
  var self = this

  self.title_index = [{title: 'text1', done: true},
                   {title: 'text2', done: false} ]

  self.list = function(){
    return self.title_index;
  }

  self.add = function(titles){
    self.title_index.push(titles);
  }
})

.controller('ListTodoController', function($scope, TodoService){
    $scope.title_index = TodoService.list();
})

.controller('AddTodoController', function($scope, TodoService){

    $scope.save = function () {
      var titles = {title: $scope.title, done: false }
      TodoService.add(titles);
      resetForm();
    }
    function resetForm() {
      $scope.title = '';
    }
});
