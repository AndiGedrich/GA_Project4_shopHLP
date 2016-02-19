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

    vm.bannerImages = [
    { "image": "images/banner.jpg", "caption": "Shop Local", "caption2": "Shop Highland Park"},
    { "image": "images/banner2.jpg", "caption": "Open Now!", "caption2": "Highland Park's Newest Eatery - Recess"},
    { "image": "images/banner3.jpg", "caption": "New Brew", "caption2": "Coffee Gets Civil"}
    ];

    vm.myInterval = 4000;

    return vm;




  }
