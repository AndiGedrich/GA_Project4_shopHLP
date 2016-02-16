angular.module('shopHLP')
  .controller('MainController', MainController);

  MainController.$inject = ['BusinessService'];

  function MainController(BusinessService){
    var vm = this;

    vm.test = "Test";

    vm.types = BusinessService.types;
    vm.selectedType = vm.types[0];
  }
