// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('ApiEndpoint', {
    //url: 'http://localhost:8100/api'
    url: 'http://elderlyapps.net/api' 
    //url: 'http://localhost:8000/api' 
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  
    .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegCtrl'
  })
  
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'dashCtrl'
        }
      }
    })

  .state('app.addParent', {
    url: '/parents/add',
    views: {
      'menuContent': {
        templateUrl: 'templates/reg-parent.html',
        controller: 'regParentCtrl'
      }
    }
  })
    
  .state('app.parent', {
    url: '/parent/:parentId',
    views: {
      'menuContent': {
        templateUrl: 'templates/parent.html',
        controller: 'ParentCtrl'
      }
    }
  })
    
  .state('app.editParent', {
    url: '/parent/:parentId/edit',
    views: {
      'menuContent': {
        templateUrl: 'templates/edit.html',
        controller: 'ParentCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
