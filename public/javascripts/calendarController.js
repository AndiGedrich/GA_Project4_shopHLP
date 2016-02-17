angular.module('shopHLP')
  .controller('CalendarController', CalendarController);

  CalendarController.$inject = ['BusinessService'];

  function CalendarController(BusinessService){
    var vm = this;

    vm.bizEvents = BusinessService.events;

    vm.date = new Date();

    vm.events = [
    {}
    ];

    vm.createCalendar = function(){
      console.log(vm.date);
      if (vm.date.indexOf("Jan" || "Mar" || "May" || "Jul" || "Aug" || "Oct" || "Dec")>= 1){



      }
    }

  };
