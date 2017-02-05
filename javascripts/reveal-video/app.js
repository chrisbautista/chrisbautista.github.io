$(document).ready(function(){
  
  function app(){
    this.previewClass = '.preview';
    this.buttonClass = '.icon';
  
    this.init();
  }
  
  app.prototype.init = function (){
    
    $(this.buttonClass).on('click', this.revealDiv);
    
    
  }
  
  app.prototype.revealDiv = function(e){
    var target = e.currentTarget;
    /*$('div').html('sliding').animate({left: 0}).delay(2000).animate({left: -100});*/
    console.log($(target),$('.preview[style*="block"]').length);
    if($('.preview[style*="block"]').length>0){
      $('.preview[style*="block"]').slideUp('fast', function(){
            $(target).closest('li').find('.preview').delay('slow').slideDown();      
      });
    }else{
      $(target).closest('li').find('.preview').delay('slow').slideDown();     
    }
  }
  
  
  
  new app(); 
  
});