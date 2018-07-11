var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  //On sélectionne le fichier script.json
    $http.get("voiture.json").then(function(response) {
        $scope.myWelcome = response.data;
    });
});
