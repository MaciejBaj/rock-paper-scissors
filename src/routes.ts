'use strict';

import * as angular from 'angular';

export function routesConfig($stateProvider, $urlRouterProvider): void {

  $urlRouterProvider.otherwise('welcome');

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      template: '<welcome-page></welcome-page>'
    });

  $stateProvider
    .state('game', {
      url: '/game',
      template: '<game></game>'
    });

  $stateProvider
    .state('info', {
      url: '/info',
      template: '<info></info>'
    });

}

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
