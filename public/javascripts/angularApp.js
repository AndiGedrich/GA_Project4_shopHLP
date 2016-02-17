angular
  .module('shopHLP', ['ui.router', 'angularMoment', 'ngResource'])
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
      .state('business', {
        url: '/business/{id}',
        templateUrl: 'partials/businessPage.html',
      });

   $urlRouterProvider.otherwise('/');
  }

