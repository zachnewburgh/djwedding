angular
  .module('app', ['ui.router', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'home.html',
       controller: 'HomeController as ctrl'
     })
     .state('home.faqs', {
       url: 'faqs',
       templateUrl: 'home/faqs.html',
       controller: 'FaqsController as ctrl'
     })
     .state('home.faqs.new', {
       url: 'faqs/new',
       templateUrl: 'home/faqs/new.html',
       controller: 'NewFaqController as ctrl'
     })

     .state('home.faqs.faq', {
       url: 'faqs/:id',
       templateUrl: 'home/faqs/show.html',
       controller: 'ViewFaqController as ctrl'
     })
    .state('home.faqs.edit', {
     url: 'faqs/edit/:id',
     templateUrl: 'home/faqs/edit.html',
     controller: 'EditFaqController as ctrl'
     });
  $urlRouterProvider.otherwise('/');
});