angular
  .module('shopHLP', ['ui.router', 'angularMoment'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('business'{
        url: '/business/{id}',
        templateUrl: '/businessPage.ejs',
      });

   $urlRouterProvider.otherwise('/');
  }

