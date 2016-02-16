angular.module('shopHLP')
  .controller('CalendarController', CalendarController);

  function CalendarController(){
    var vm = this;

    vm.date = new Date();

    vm.events = [
    {}
    ];

  };
