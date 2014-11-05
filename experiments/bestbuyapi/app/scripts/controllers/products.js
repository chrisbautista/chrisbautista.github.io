angular.module('bestBuy.controllers').

  /* Driver controller */
  controller('productsController', function($scope, $routeParams, bestBuyAPIservice) {
    $scope.id = $routeParams.id;
    $scope.categories = [];
    $scope.category = null;
    $scope.product = null;


    bestBuyAPIservice.getCategories().then(function (response) {
      
       console.log(response.data.subCategories);
       $scope.categories = response.data.subCategories;
       $scope.category = {'id':'departments','name':'All Products'};
       $scope.loadCategoryProducts($scope.category);
       
    });

    /*
    * @func loadCategoryProducts
    * @param product sku
    * @desc queries api for more product information
    */

    function loadCategoryProducts(category){
      $scope.category = category;

      bestBuyAPIservice.getCategoryProducts(category.id).then(function (response) {
      
       console.log(response.data);
       $scope.categoryProducts = [];
       $scope.categoryProducts = response.data.products;
       
      });
    }

    /*
    * @func showProduct
    * @param product sku
    * @desc queries api for more product information
    */
    function loadProduct(product){
      
      bestBuyAPIservice.getProduct(product.sku).then(function (response) {
      
       console.log(response.data);
       $scope.product = response.data;

       
      });
    }

    /*
    * @func clearProduct
    * removes product object
    */
    function clearProduct(){
       $scope.product = null;
    }

    function showProduct(product){
       loadProduct(product);
    }


    // public functions
    $scope.loadCategoryProducts = loadCategoryProducts;
    $scope.showProduct = showProduct;
    $scope.clearProduct = clearProduct;

  });