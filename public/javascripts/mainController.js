angular.module('shopHLP')
  .controller('MainController', MainController);

  MainController.$inject = ['BusinessService', '$location'];

  function MainController(BusinessService, $location){
    var vm = this;

    vm.test = "Test";

    vm.types = BusinessService.types;
    vm.selectedType = vm.types[0];

    vm.returnHome = function(){
      $location.path('/')
    }


  }
