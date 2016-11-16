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

  self.changedata = function(index){
    if(self.title_index[i].done === false){
       self.title_index[i].done = true;
    } else {
      self.title_index[i].done = false;
    }
  }
})

.controller('ListTodoController', function($scope, TodoService){
    $scope.title_index = TodoService.list();

    $scope.check = function(i){
      TodoService.changedata(i);
    }
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
