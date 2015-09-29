(function(){

  'use strict';

  /* globals $, helpers, Application, PageRender, PostCard */

  var app = new Application({'animatePages':PageRender,'postcard':PostCard});

  app.listeners = getlisteners(app);
  app.init();

  //////////////////////////////////

  function getListeners(self){

    return {
            intro: function() {
                $('#enterbtn').off().on('click', function() {
                    self.start();
                });
            },
            mechanics: function() {
                $('#step1 .Submit').off().on('click', function() {
                    self.nextPage();
                });
            },
            pickScent: function() {
                $('.scents').off().on('mouseover', function() {

                    if ($(this).attr('src').indexOf('pg3-selectcard.png') !== -1) {
                        $(this).attr('src', 'assets/pg3-selectcard-hi.png');
                    }

                    $(this).on('mouseout', function() {
                        $(this).attr('src', 'assets/pg3-selectcard.png');
                        $(this).off('mouseout');
                    });

                }).on('click', function(e) {
                    e.preventDefault();
                    self.postcard.setDesign($(this)[0].alt);
                    $('.preview').attr('src', 'assets/designs/' + self.postcard.getThumbNail());
                    $('#hrefFront').attr('href', 'assets/designs/' + self.postcard.getPostcardZoom());
                    self.nextPage();
                    e.stopPropagation();
                    $('.scents').off();
                });
            },
            details: function() {
                $('#frmFriend').off().on('click', function(e) {
                    alert('This should popup a selector from a list of facebook friends');
                });
                $('frm_mobile').on('change', function validatePhone() {
                    var filter = /^[0-9-+]+$/;
                    if (filter.test($(this).val())) {
                        $(this).css('border', '');
                        return true;
                    }
                    $(this).css('border', '1px solid red');
                });
                $('#step3 .Submit').off().on('click', function(e) {
                    e.preventDefault();

                    // 
                    // add form validation here
                    // 

                    self.nextPage();
                    e.stopPropagation();
                });
            },
            message: function() {
                $('#frm_dedication').off().limitMaxlength({
                    onEdit: function(remaining) {
                        $(this).siblings('.charsRemaining').text('Characters remaining: ' + remaining);
                        if (remaining > 0) {
                            $(this).css('background-color', 'white');
                        }
                    },
                    onLimit: function() {
                        $(this).css('background-color', 'red');
                    }
                });

                $('#step4 .Submit').off().on('click', function(e) {
                    e.preventDefault();
                    self.nextPage();
                    e.stopPropagation();
                });
            },
            postcard: function() {
                $('#step5 .Submit').off().on('click', function(e) {
                    e.preventDefault();
                    alert('post this session to server. save.');
                    self.numPostCardsSent += 1;
                    $('#pg8faq').html('You have successfully sent ' + self.numPostCardsSent + ' postcard' + (self.numPostCardsSent > 1 ? 's' : '') + '.');
                    self.nextPage();
                    e.stopPropagation();
                });

                helpers.thisPreview({ 
                    obj:$('#hrefBack'), 
                    width: 640,
                    height: 469,
                    beforeShow: function() {
                        var dateStr = (new Date()).toDateString().split(' ');
                        $('#salute').html('Dear ' + $('#frm_sendee').val().substr(0, $('#frm_fname').val().indexOf(' ', 0)) + ',');
                        $('#ddate').html(dateStr[1] + ' ' + dateStr[2] + ', ' + dateStr[3]);
                        $('#dedicatory').html('' + $('#frm_dedication').val());
                        $('#close').html($('#frm_closing').val() + ',<br />' + $('#frm_sender').val());
                        $('#From').html('From: ' + $('#frm_sender').val());
                        $('#To').html('' + $('#frm_fname').val() + '<br />' + $('#frm_street').val() + ' ' + $('#frm_province').val() + ' ' + $('#frm_zip').val());
                        $('#thispostcard').addClass(self.postcard.getPostcardBack());
                    }
                });

                $('#backToStart').off().on('click', function(e) {
                    e.preventDefault();
                    self.restart();
                    e.stopPropagation();
                });
            },
            summary: function() {
                $('#newPostcard').off().on('click', function(e) {
                    e.preventDefault();
                    self.reset();
                    e.stopPropagation();
                });
                $('#share').off().on('click', function() {
                    alert('Trigger facebook Share');
                });
            }

  };
};

})();