'use strict';

angular.module('myContacts.contacts', ['ngRoute', "firebase"])

// .constant("FirebaseUrl", "https://boasbabs-mycontactapp.firebaseio.com/contacts")
// .service("ref", ["FirebaseUrl"])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ["$scope", "$firebaseArray", "$firebaseObject", function($scope, $firebaseArray, $firebaseObject) {
	var config = {
	    apiKey: "AIzaSyCgLpe0O8ivSvcmi8es-pHC5Pg2UDtKN9g",
	    authDomain: "boasbabs-mycontactapp.firebaseapp.com",
	    databaseURL: "https://boasbabs-mycontactapp.firebaseio.com",
	    storageBucket: "boasbabs-mycontactapp.appspot.com",
	  };
	firebase.initializeApp(config);

	var rootRef = firebase.database().ref();

	$scope.contacts = $firebaseArray(rootRef);
	console.log($scope.contacts);
}]);