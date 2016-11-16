angular.module('TodoApp', [])
.service('contactService', function(){
  var self = this

  self.title_index = [{title: 'text1', done: true},
                   {title: 'text2', done: false} ]

  self.list = function(){
    return self.title_index;
  }

  self.add = function(contact){
    self.title_index.push(contact);
  }
})

.controller('ListTodoController', function($scope, TitleService){
    $scope.title_index = TitleService.list();
})

.controller('AddTitleController', function($scope, TitleService){

    $scope.save = function () {
      var titles = {title: $scope.title, done: false }
      contactService.add(titles);
      resetForm();
    }
    function resetForm() {
      $scope.title = '';
    }
});
