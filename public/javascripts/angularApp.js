angular
  .module('shopHLP', ['ui.router', 'angularMoment', 'ui.bootstrap'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/discover.html',
      });


    $stateProvider
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'partials/calendar.html',
      });

    $stateProvider
      .state('newEvent', {
        url: '/newEvent',
        templateUrl: 'partials/newEvent.html',
      });



   $urlRouterProvider.otherwise('/');
  }

