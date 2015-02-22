(function ( $ ) {

        var createBoxer = function(config){
          var obj = config.obj;
          var hlpr = this;

          function addCloseBtn(cntnr){ 
              var closeBtn = document.createElement('img');
              closeBtn.src = "close.png"; 
              closeBtn.addEventListener("load", function () {
                var imgSize = [this.width, this.height];
                this.id = "closeBtn";
                $('.previewOverlay').append(this);
                $("#closeBtn").css('top',(parseInt($(cntnr).css('top'))-20)+"px");
                $("#closeBtn").css('left',(parseInt($(cntnr).css('left'))+parseInt(cntr.css('width'))+12)+"px");

              });
              $('.previewOverlay').on('click',function(){
                  cntnr.remove();
                  $(this).remove();
                  $(this).off();
              });
          }

          function triggerBoxer (e){
            var overlay,insideContainer,w,h;
            var thumb = e.target.parentNode;
            e.preventDefault();
            $('body').append($('<div></div>').addClass('previewOverlay'));
            
            outSideContainer = document.createElement('div');
            outSideContainer.id = "imgContainer";

            insideContainer = buildInside(thumb, config.type,function(){
                outSideContainer.appendChild(insideContainer);
                console.dir($(outSideContainer)[0].firstChild.width);
                w = $(outSideContainer)[0].firstChild.width;
                h = $(outSideContainer)[0].firstChild.height;
                console.log(w,h);
                $(outSideContainer).css({
                    'top':(($(window).height()/2)-parseInt(h/2))+"px",
                    'left':(($(window).width()/2)-parseInt(w/2))+"px",
                    'height':(h+2)+"px"});
                addCloseBtn(outSideContainer);
            });

            $(".previewOverlay").append(outSideContainer);
            
            
            if(config.beforeShow) config.beforeShow();
            return false;
          }

          function buildInside(thumb, configType, callback){
             var fragment;
             if(configType==="") {//image
                fragment = document.createDocumentFragment();
                var img = document.createElement( "img" );
                img.src = thumb.href; 
                fragment.appendChild(img);
                img.addEventListener("load",  callback );
             }  
             return fragment;
          }
          

          obj.off().on('click',triggerBoxer);


        };    
 
    $.fn.boxer = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            type : ""

        }, options );
 
        this.filter( "div" ).each(function() {
            $.each(this.children,function(){
                createBoxer({obj:$(this),type:settings.type});
            });
        });

        return this;
 
    };
 
}( jQuery ));