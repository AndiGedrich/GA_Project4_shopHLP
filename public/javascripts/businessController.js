angular.module('shopHLP')
  .controller('BusinessController', BusinessController);

  BusinessController.$inject = ['$stateParams', 'BusinessService'];

  function BusinessController($stateParams, BusinessService){
    var vm = this;

    vm.test = "BIDNESS"

    vm.businesses = BusinessService.businesses;
    vm.types = BusinessService.types;
    vm.selectedType = vm.types[0];

    vm.business = BusinessService.businesses[$stateParams.id];
  }
