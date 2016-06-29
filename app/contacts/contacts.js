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
		apiKey : "F4qOLMiT9NJ9ap3jmjEZtWl7iTIIDg3QdO9rV0C7",
		authDomain: "boasbabs-mycontactapp.firebaseio.com",
		databaseURL: "https://boasbabs-mycontactapp.firebaseio.com"
	};

	firebase.initializeApp(config);

	var rootRef = firebase.database().ref();

	$scope.contacts = $firebaseArray(rootRef);
	console.log($scope.contacts);
}]);