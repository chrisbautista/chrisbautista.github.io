/**
 *
 * user service
 * 
 * chris bautista <chris@codespud.ca>
 * http://chrisbautista.github.io
 *
 * assumption theres a helper class called AJAX
 * not caching results in service
 */

/* globals ajax */

  (function(){
    var currentRecord;
    var userSrvc = userServices('http://api/user');

      userSrvc.updateUser('1', {'firstName': 'Chris', 'lastName': 'Bautista'})
      .then(function(response){
               if(response.code === 'OK'){
                  currentRecord = response.data;
               }else{ // catch error responses like id not found
                  currentRecord = response;
               }
            })
            .catch(function(error){ // api or http level error

                results = error;
            });

  ///////////////
  // user service 
  function userService(url){
    return {
      apiUrl : url,
      updateUser: function(id, updateRecord){
          return ajax.post(getUrl('update')+id, updateRecord);
      }
    };

  }


  }());


