angular.module('shopHLP')
  .controller('BusinessController', BusinessController);

  BusinessController.$inject = ['$state','$stateParams','BusinessService'];

  function BusinessController( $state, $stateParams, BusinessService){
    var vm = this;

    vm.test = "BIDNESS"

    vm.businesses = BusinessService.all;
    vm.types = BusinessService.types;
    vm.selectedType = vm.types[0];
    vm.amount = ['all', 6];
    vm.selectAmount = 6;

    vm.business = BusinessService.all[$stateParams.id];

    vm.showBusinessDetail = function(index){
      // var show = '/business/' + business._id;
      // $location.path(show);
      console.log('hello');
      vm.current = vm.businesses[index];
      console.log(vm.current);
    }


  }
