angular.module('shopHLP')
  .factory('EventsService', ['$http', '$location', function(){

    var vm = this;

    vm.all = [];
    vm.addEvent = addEvent();
    vm.newEvent = {};
    vm.getEvents = getEvents;
    vm.deleteEvent = deleteEvent;


    vm.events = [
      { "title": "Paella Pop-up at Ba",
        "dayOfWeek": "Sunday",
        "startDate": "02/15/2016",
        "endDate": "03/15/2016",
        "startTime": "6:00pm",
        "endTime": "10:00pm",
        "address": "5100 York Blvd",
        "cost": 10 },
      { "title": "Highland Park Farmer's Market",
        "dayOfWeek": "Tuesday",
        "startDate": "02/16/2016",
        "endDate": "02/16/2017",
        "startTime": "3:00pm",
        "endTime": "7:30pm",
        "address": "5712 Marmion Way",
        "cost":  0 },
      { "title": "Trivia Night @ The York",
        "dayOfWeek": "Monday",
        "startDate": "02/22/2016",
        "endDate": "02/22/2017",
        "startTime": "9:00pm",
        "endTime": "11:00pm",
        "address": "5018 York Boulevard",
        "cost": 0 },
      { "title": "Live Jazz @ La Cuevita",
        "dayOfWeek": "Sunday",
        "startDate": "02/28/2016",
        "endDate": "02/28/2017",
        "startTime": "8:00pm",
        "endTime": "10:00pm",
        "address": "5922 N. Figueroa Blvd.",
        "cost": 5}
    ];

    vm.events.forEach(function(event){
      vm.all.push(event);
    })

    return vm;

    function getEvents(){
      $http
        .get('http://localhost:3000/events')
        .then(function(response){
          vm.all = response.data.events;
        });
    }

    function addEvent(){
      $http
        .post('http://localhost:3000/events', vm.newEvent)
        .then(function(response){
          getEvents();
          console.log("I am submitting");
          $location.path('/calendar');
        })
        vm.newEvent = {};
    }

    function updateEvent(){
      $http
        .put('http://localhost:3000/events/' + event._id)
        .then(function(response){
          getEvents();
        })
    }

    function deleteEvent(event){
      $http
        .delete('http://localhost:3000/events' + event._id)
        .then(function(response){
          var index = vm.all.indexOf(event);
          vm.all.splice(index, 1);
        });
    }
  }]);
