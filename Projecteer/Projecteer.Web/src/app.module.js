﻿angular.module('projecteer', [
    'ngResource', 
    'ui.router', 
    'LocalStorageModule'
]);

angular.module('projecteer')
    .value('apiUrl', 'http://localhost:63171/api');

angular.module('projecteer').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('AuthenticationInterceptor');
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home', 
            templateUrl: '/src/home/home.html', 
            controller: 'HomeController'

        }).state('register', {
            url: '/register', 
            templateUrl: '/src/register/register.html', 
            controller: 'RegisterController'

        }).state('login', {
            url: '/login', 
            templateUrl: '/src/login/login.html', 
            controller: 'LoginController'
        
        }).state('app', {
            url: '/app', 
            templateUrl: '/src/app.html', 
            controller: 'AppController'
    
        }).state('app.dashboard', {
            url: '/dashboard', 
            templateUrl: '/src/dashboard/dashboard.html', 
            controller: 'DashboardController'

        }).state('app.project', {
            url: '/project', 
            abstract: true, 
            template: '<ui-view>'
        
        }).state('app.project.create', {
            url: '/new', 
            templateUrl: '/src/project/project.html', 
            controller: 'ProjectCreateController'
        }).state('app.project.detail', {
            url: '/detail/:id',
            templateUrl: '/src/project/projectdetail/projectdetail.html',
            controller: 'ProjectDetailController'
        }).state('app.project.user', {
            url: '/userprojects',
            templateUrl: '/src/project/userprojects/userprojects.html',
            controller: 'UserProjectsController'
        }).state('app.user', {
            url: '/user',
            templateUrl: '/src/user/user_profile.html',
            controller: 'UserProfileController'
        });
});

angular.module('projecteer').run([
    'AuthenticationService', 
    function (AuthenticationService) {
        AuthenticationService.initialize();
    }
]);