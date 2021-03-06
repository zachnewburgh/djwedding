angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'home.html',
       controller: 'HomeController as ctrl'
     })
     .state('home.welcome', {
       url: 'welcome',
       templateUrl: 'home/welcome/index.html',
       controller: 'WelcomeController as ctrl'
     })
     .state('home.directions', {
       url: 'directions',
       templateUrl: 'home/directions/index.html',
       controller: 'DirectionsController as ctrl'
     })
     .state('home.faqs', {
       url: 'faqs',
       templateUrl: 'home/faqs/index.html',
       controller: 'FaqsController as ctrl'
     })
     .state('home.admin', {
       url: 'admin/faqs',
       templateUrl: 'home/faqs/admin.html',
       controller: 'FaqsController as ctrl'
     })
     .state('home.new', {
       url: 'admin/faqs/new',
       templateUrl: 'home/faqs/new.html',
       controller: 'NewFaqController as ctrl'
     })
     .state('home.faq', {
       url: 'admin/faqs/:id',
       templateUrl: 'home/faqs/show.html',
       controller: 'ViewFaqController as ctrl'
     })
    .state('home.edit', {
     url: 'admin/faqs/edit/:id',
     templateUrl: 'home/faqs/edit.html',
     controller: 'EditFaqController as ctrl'
     });
  $urlRouterProvider.otherwise('/welcome');
});