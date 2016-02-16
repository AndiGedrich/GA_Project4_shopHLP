angular.module('shopHLP')
  .controller('BusinessController', BusinessController);

  BusinessController.$inject = ['Businesses'];

  function BusinessController($stateParams, businesses){
    var vm = this;

    //vm.businesses = Businesses.businesses;
    //vm.types = Businesses.types;
    //vm.selectedType = vm.types[0];

    //vm.business = businesses.businesses[$stateParams.id];
  }
