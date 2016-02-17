angular
  .module('shopHLP', ['ui.router', 'angularMoment'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/discover.html',
      })
      .state('home.business', {
        url: '^/:id',
        templateUrl: 'partials/businessPage.html',
      });

    $stateProvider
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'partials/calendar.html',
      });



   $urlRouterProvider.otherwise('/');
  }

