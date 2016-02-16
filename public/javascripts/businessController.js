angular.module('shopHLP')
  .controller('BusinessController', BusinessController);

  BusinessController.$inject = ['businesses'];

  function BusinessController ($stateParams, businesses){
    var vm = this;

    vm.businesses = businesses.businesses[$stateParams.id];
  }
