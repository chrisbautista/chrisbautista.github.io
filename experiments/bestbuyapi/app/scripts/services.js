angular.module('bestBuy.services', [])
  .factory('bestBuyAPIservice', function($http) {

    var bestBuyAPI = {};

    /*
    * @func getCategories
    * query all product categories
    */

    bestBuyAPI.getCategories = function() {
      return $http.get('http://www.bestbuy.ca/api/v2/json/category/Departments');
    }

    /*
    * @func getCategoryProducts
    * @param string categoryId
    * query all products in selected category
    */
    bestBuyAPI.getCategoryProducts = function(categoryId) {
      return $http.get('http://www.bestbuy.ca/api/v2/json/search?categoryid='+categoryId);
    }

    /*
    * @func getProduct
    * @param string productId
    * query all details for selected product
    */
    bestBuyAPI.getProduct = function(productId) {
      return $http.get('http://www.bestbuy.ca/api/v2/json/product/'+productId);
    }

    return bestBuyAPI;
  });