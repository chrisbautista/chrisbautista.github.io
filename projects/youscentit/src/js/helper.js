$(function(){

  var helpers = {
    mask: function (){$("#container").block({ message:null, overlayCSS: { backgroundColor: '#FFF' } });},
    unmask: function (){$("#container").unblock();},
    fadeScreen: function (scr1,scr2) {scr1.fadeOut(null,"",function(){scr2.removeClass("hid").fadeIn(500,"",function(){scr1.addClass("hid");});});},
    thumbPreview: function(config){
      var allThumbs = $(".cbPreview");
      var hlpr = this;
      allThumbs.on('click',function(e){
        var overlay,highRes,img,w,h;
        var thumb = e.target.parentNode;
        e.preventDefault();
        $('body').append($('<div></div>').addClass('previewOverlay'));
        img = document.createElement('img');
        img.src = thumb.href; 
        img.addEventListener("load", function () {
          var closeBtn;
          var imgSize = [this.width, this.height];
          highRes=document.createElement('div'); 
          highRes.appendChild(img);
          highRes.id = 'imgContainer';
          highRes = $(highRes);
          $('.previewOverlay').append(highRes);
          highRes.css('top',(($(window).height()/2)-parseInt(imgSize[1]/2))+"px");
          highRes.css('left',(($(window).width()/2)-parseInt(imgSize[0]/2))+"px");
          highRes.css('height',(img.height+2)+"px");
          highRes.append(img);
          // add x button
          hlpr.addCloseBtn(highRes);
        });
        return false;
      });
    },
    thisPreview: function(config){
      var obj = config.obj;
      var hlpr = this;
      obj.on('click',function(e){
        var overlay,insideContainer,w,h;
        var thumb = e.target.parentNode;
        e.preventDefault();
        $('body').append($('<div></div>').addClass('previewOverlay'));
        $(".previewOverlay").append('<div id="postcard"><div id="divleft"><div id="salute">Dear _______________,</div><div id="ddate"></div><div id="dedicatory"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor consequat nibh, nec euismod risus accumsan ac. Aenean tortor ante,  </p></div><div id="close">Love <br/>  _______________</div></div><div id="divright"><div id="To"></div><div id="From"></div></div></div>');
        
        insideContainer = $("#postcard");
        
        w = parseInt(insideContainer.css('width'));
        h = parseInt(insideContainer.css('height'));
        insideContainer.css('top',(($(window).height()/2)-parseInt(h/2))+"px");
        insideContainer.css('left',(($(window).width()/2)-parseInt(w/2))+"px");
        insideContainer.css('height',(h+2)+"px");

        hlpr.addCloseBtn(insideContainer);
        
        if(config.beforeShow) config.beforeShow();
        return false;
      });
    },
    addCloseBtn: function(insideContainer){
      var closeBtn = document.createElement('img');
      closeBtn.src = "assets/close.png"; 
      closeBtn.addEventListener("load", function () {
        var imgSize = [this.width, this.height];
        this.id = "closeBtn";
        $('.previewOverlay').append(this);
        $("#closeBtn").css('top',(parseInt(insideContainer.css('top'))-20)+"px");
        $("#closeBtn").css('left',(parseInt(insideContainer.css('left'))+parseInt(insideContainer.css('width'))+12)+"px");

      });
      $('.previewOverlay').on('click',function(){
          $(this).off();
          insideContainer.remove();
          $(this).remove();
      });
    }
  };  

  window.helpers = helpers;
});