/*
 * jQuery Boxer Plugin
 * Version 0.0.4 (21 Feb 2015)
 * @requires jQuery v1.4.3 or later
 *
 * Examples at: http://chrisbautista.github.io/projects/boxerjs/
 * Copyright (c) 2014-2015 Chris Bautista @chrisbautista
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
*/
(function($) {

    var createBoxer = function(config) {
        var obj = config.obj;
        var hlpr = this;
        var $main;

        function addCloseHandler(cntnr) {
            var $btn;
            var $cntnr = $(cntnr);
            var closeBtn = document.createElement('div');
            closeBtn.className = "boxer-closeBtn";
            $main.append(closeBtn);
            $btn = $(".boxer-closeBtn");
            $btn.css('top', (parseInt($cntnr.css('top')) - 20) + "px");
            $btn.css('left', (parseInt($cntnr.css('left')) + parseInt($cntnr.css('width')) + 12) + "px");
            $main.on('click', function() {
                $cntnr.remove();
                $(this).remove();
                $(this).off();
            });
        }

        function triggerBoxer(e) {
            var overlay, configType, insideContainer, w, h;
            var thumb = e.target;
            e.preventDefault();
            
            thumb = thumb.nodeName !== 'A' ? e.target.parentNode : thumb;
 
            if(thumb.nodeName !== 'A') {
             return false;
            }
            
            configType = $(thumb).attr('data-type') || "";
    
            
            $('body').append($('<div></div>').addClass(config.overlayName));
            $main = $("."+ config.overlayName);

            outSideContainer = document.createElement('div');
            outSideContainer.id = "imgContainer";

            insideContainer = buildInside(thumb, configType, function() {
                outSideContainer.appendChild(insideContainer);

                if($(outSideContainer)[0].firstChild.width){
                    w = $(outSideContainer)[0].firstChild.width;
                    h = $(outSideContainer)[0].firstChild.height;
                }else{
                    w = config.width;
                    h = config.height;
                    $($(outSideContainer)[0].firstChild).css('width',w);
                    $($(outSideContainer)[0].firstChild).css('height',h);
                    //$(outSideContainer).css('padding',"10px");
                }


                if( w >$(window).width()*0.7 || h > $(window).height()*0.7 ){
                    w =  parseInt(w/2);
                    h =  parseInt(h/2);
                    $(outSideContainer)[0].firstChild.width = w;
                }//sometimes images are just too big lets fix it
                 // works gracefully for divs

                $(outSideContainer)[0].firstChild.width = w;
                $(outSideContainer).css({
                    'top': (($(window).height() / 2) - parseInt(h / 2)) + "px",
                    'left': (($(window).width() / 2) - parseInt(w / 2)) + "px",
                    //'height': (h + 2) + "px"
                });
                addCloseHandler(outSideContainer);
            });

            $main.append(outSideContainer);


            if (config.beforeShow) config.beforeShow();
            return false;
        }

        function buildInside(thumb, configType, callback) {
            var fragment,insideNode,text,title;
            fragment = document.createDocumentFragment();


            if (configType === "" || configType ==="image" ) { //image
                
                insideNode = document.createElement("img");
                insideNode.src = thumb.href;
                fragment.appendChild(insideNode);
                
                if(thumb.title){
                    title = document.createElement("p");
                    text = document.createTextNode(thumb.title);
                    title.appendChild(text);
                    fragment.appendChild(title);
                }
                
                insideNode.addEventListener("load", callback);

            } else if(configType==="ajax"){
                insideNode = document.createElement("div");
                $(insideNode).load(thumb.href, function( response, status, xhr ) {
                  fragment.appendChild(insideNode);
                  callback(response);
                });

            }

            return fragment;
        }


        obj.off().on('click', triggerBoxer);


    };

    $.fn.boxer = function(options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            overlayName: "previewOverlay",
            width:600,
            height:400
        }, options);

        this.filter("div").each(function() {
            $.each(this.children, function() {
                createBoxer($.extend({obj: $(this)}, settings));
            });
        });

        return this;

    };

}(jQuery));