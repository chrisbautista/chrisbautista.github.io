//
//
//
(function(){
  'use strict';

  var helpers = {
    mask: function (){$("#container").block({ message:null, overlayCSS: { backgroundColor: '#FFF' } });},
    unmask: function (){$("#container").unblock();},
    runFancyBox: function(){$('.fancybox').fancybox();},
    fadeScreen: function (scr1,scr2) {scr1.fadeOut(null,"",function(){scr2.removeClass("hid").fadeIn(500,"",function(){scr1.addClass("hid");});});}
  };  

  var PageRender = {

     intro: function(){
      var messages = [
      "listing travel plans...",
      "planning activities...",
      "checking local weather...",
      "packing essentials...",
      "checking itinerary...",
      "mapping out route...",
      "clearing schedule...",
      "departing..."

      ];

      function preload(callback){
        var checkImg = new Image();
        var imagesArray = $('img').map(function(){return $(this).attr("src");});

        checkImg.src ='_assets/loading.png';

        jQuery.imgpreload('_assets/loading.png', function(){
          $('#container').fadeOut(50);
          $("#msg").fadeOut(50).fadeIn(100);
          $("#msg").html("<strong>Starting ...</strong>");
        });

        jQuery.imgpreload(imagesArray, {
          each: function () {
              var m = messages[Math.floor((Math.random()*(messages.length))+1)];
              $("#msg").delay(300).html(m);
          },
          all: function () {
              $("#msg").css("opacity","0");
              $("#container").css("opacity","1").fadeIn(400);
              callback();
          }
        }) ;  


      }

      preload(function(){
        $("#msg").remove();
        $("#container").addClass('intro');
        setTimeout( function(){$("#container").css("opacity","1").fadeIn(400);
          $('#container').animate({opacity:'1'},{duration:'fast'});  
          $('#container').fadeIn(400);
          $("#logo").animate({opacity:'0',scale:0},{duration:'fast'});
          $("#welcome").animate({opacity:'0',scale:0},{duration:'fast'});
          $("#curtis-name").animate({opacity:'0',scale:0},{duration:'fast'});
          $("#enter").animate({opacity:'0',scale:0.01,left:'405px',top:'445px'},{duration:'fast'});
          $("#jasmine").animate({opacity:'0',scale:1,left:'300px'},{duration:'fast'});
          $("#friendtxt").animate({opacity:'0',scale:0},{duration:'fast'});
          $("#sign").animate({opacity:'0',scale:0},{duration:'fast'});
          $("#logo").animate({opacity:'1',scale:'1'},{duration:'slow',easing:'easeInBack',
             complete:function(){
                $("#welcome").animate({opacity:'1',scale:'1'},{duration:'slow',easing:'easeInBack'});
                $("#friendtxt").animate({opacity:'1',scale:'1'},{duration:'slow',easing:'easeInBack'});
                $("#curtis-name").animate({opacity:'1',scale:'1'},{duration:'slow',easing:'easeInBack'});
                $("#sign").animate({opacity:'1',scale:'1'},{duration:'slow',easing:'easeInBack',
                  complete:function(){
                      $("#jasmine").animate({opacity:'1',left:'99px'},{ duration:'slow',easing:'easeInBack',
                              complete:function(){
                                  $("#enter").delay(800).animate({opacity:'0.3',scale:'1'},{duration:'fast'})
                                   .animate({opacity:'1',scale:'1',left:'405px',top:'445px'},{duration:'slow',easing:'easeOutBack'});}
                        });
                    }});
              }});    
        }, 1500);
            
      });
      
     }, // intro
     mechanics: function(){
      $("#container").fadeOut(10).removeClass('intro').addClass("inside");
      $("#container").html($("#insideContent")[0].innerHTML); 
      $("#header-top").fadeOut(10);
      $("#content").fadeOut(10);
  
      setTimeout(function(){
        $("#container").fadeIn(500,function(){
          $("#header-top").fadeIn(700);
          $("#content").fadeIn(1200);
        });
        helpers.runFancyBox();
      },500);

     },//mechanics
     pickScent: function(){
      $("#step2, #step3, #step4, #step5, #step6").fadeOut(10).removeClass("hid").addClass("hid");
      helpers.fadeScreen($("#step1"),$("#step2"));
     },
     details: function(){
      helpers.fadeScreen($("#step2"),$("#step3"));

     },
     message: function(){
      helpers.fadeScreen($("#step3"),$("#step4"));

     },     
     postcard: function(){
      $('.fancybox').fancybox({padding : 0,openEffect  : 'elastic'});
      helpers.fadeScreen($("#step4"),$("#step5"));
      
     },
     summary: function(){
      helpers.fadeScreen($("#step5"),$("#step6"));
     }
  };


  window.PageRender = PageRender;


}());