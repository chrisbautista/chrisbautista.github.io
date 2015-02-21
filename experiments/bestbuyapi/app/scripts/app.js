angular.module('bestBuy.controllers', []);

angular.module('bestBuyApp', [
    'bestBuy.services',
    'bestBuy.controllers',
    'ngRoute'
]).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when("/products", {
            templateUrl: "views/products.html",
            controller: "productsController"
        }).
        otherwise({
            redirectTo: '/products'
        });
    }
]);