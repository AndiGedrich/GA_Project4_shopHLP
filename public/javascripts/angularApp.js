angular
  .module('shopHLP', ['ui.router', 'angularMoment'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){

   $urlRouterProvider.otherwise('/');
  }

