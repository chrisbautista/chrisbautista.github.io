;(function($, $h) {

    var Page = {
        pages: [

            function(app) { // page 0
                var self = app;
                $("#SBF-2, .bubble, #share-away").css("opacity", "0");
                self.getCurrentPage().fadeIn(100, function() {
                    var tmpConfig = {
                        y1: 0,
                        delay: 2000
                    };

                    self._add($h._enter($("#SBF-2"), $.extend({
                        x1: $h.getCenter(750, $("#SBF-2").width()),
                        x2: $h.getCenter(750, $("#SBF-2").width()),
                        y2: 82
                    }, tmpConfig)));
                    self._add($h._enter($("#bubble1"), $.extend({
                        x1: -100,
                        x2: 500,
                        y2: 300,
                    }, tmpConfig)));
                    self._add($h._enter($("#bubble3"), $.extend({
                        x1: 700,
                        x2: 450,
                        y2: 10,
                    }, tmpConfig)));
                    self._add($h._enter($("#bubble2"), $.extend({
                        x1: 300,
                        x2: 50,
                        y2: 40,
                    }, tmpConfig)));
                    self._add($h._enter($("#share-away"), {
                        type: "fadeOnly",
                        delay: 2000
                    }));

                    $("#share-away").bind('click', function(e) {
                        self.nextPage();
                    });
                }); // getCurrentPage()
            },
            function(app) { // page 1
                var self = app;
                var tmpConfig = {
                    type: "grow",
                    y1: 150,
                    delay: 700,
                    _ease: 'swing'
                };

                $("#kwento, #photo, #video").css("opacity", "0");

                self.getCurrentPage().fadeIn(100, function() {

                    self._add($h._enter($("#share-header"), {
                        type: "fadeOnly",
                        delay: 700
                    }));

                    self._add($h._enter($("#kwento"), $.extend({
                        x1: 130,
                        width: 163,
                        height: 180
                    }, tmpConfig), {
                        onEnter: function() { //306
                            self._add($h._enter($("#photo"), $.extend({
                                x1: 306,
                                width: 131,
                                height: 180
                            }, tmpConfig), {
                                onEnter: function() { //450
                                    self._add($h._enter($("#video"), $.extend({
                                        x1: 462,
                                        width: 143,
                                        height: 180
                                    }, tmpConfig)));
                                }
                            })); // photo
                        }
                    })); // kwento

                    $("#kwento").off().bind('click', function(e) {
                        self.nextPage();
                    });
                    $("#photo").off().bind('click', function(e) {
                        self.nextPage();
                    });
                    $("#video").off().bind('click', function(e) {
                        self.nextPage();
                    });
                }); // getCurrentPage()
            },
            function(app) { // page 2
                var self = app;

                $(".anim-obj").css("opacity", "0");

                self.getCurrentPage().fadeIn(100, function() {

                    var tmpConfig = {
                        x1: 250,
                        y1: 300,
                        delay: 1000,
                        easing: "easeInOutSine"
                    };

                    self._add($h._enter($("#kwento-header"), {
                        x1: 250,
                        y1: -100, 
                        x2: 250,
                        y2: 50,                   
                        delay: 1000,
                        easing: "easeInOutSine"
                      }));
                    self._add($h._enter($("#kwentoTextArea"), $.extend({
                        x2: 214,
                        y2: 180,
                    }, tmpConfig)));
                    self._add($h._enter($("#finished"), $.extend({
                        x2: 165,
                        y2: 375,
                    }, tmpConfig)));
                    self._add($h._enter($("#finishedButtons"), $.extend({
                        x2: 183,
                        y2: 418,
                    }, tmpConfig)));



                    $(".button").off().bind('click', function(e) {
                        self.nextPage();
                    });
                }); // getCurrentPage()
            },
            function(app) { // page 3
                var self = app;

                 $(".anim-obj").css("opacity", "0");

                self.getCurrentPage().fadeIn(100, function() {

                    var tmpConfig = {
                        delay: 1000,
                        easing: "easeInOutSine"
                    };

                    self._add($h._enter($("#photo-header"), $.extend({
                        x1: 250,
                        y1: -100, 
                        x2: 250,
                        y2: 50,
                    }, tmpConfig)));
                    self._add($h._enter($("#photoChoose"), $.extend({
                        x1: 134,
                        y1: 152,
                        x2: 134,
                        y2: 152,
                    }, tmpConfig)));


                    $(".button").off().bind('click', function(e) {
                        self.nextPage();
                    });
                }); // getCurrentPage()
            },
            function(app) { // page 4
                var self = app;

                $(".anim-obj").css("opacity", "0");

                self.getCurrentPage().fadeIn(100, function() {

                    var tmpConfig = {
                        delay: 1000,
                        easing: "easeInOutSine"
                    };

                    self._add($h._enter($("#video-header"), $.extend({
                        x1: 250,
                        y1: -100, 
                        x2: 250,
                        y2: 50,
                    }, tmpConfig)));
                    self._add($h._enter($("#videoChoose"), $.extend({
                        x1: 134,
                        y1: 152,
                        x2: 134,
                        y2: 152,
                    }, tmpConfig)));


                    self.getCurrentPage().find(".button").off().bind('click', function(e) {
                        self.nextPage();
                    });
                }); // getCurrentPage()
            },
            function(app) { // page 5 
                var self = app;

                $(".anim-obj").css("opacity", "0");

                self.getCurrentPage().fadeIn(100, function() {


                    self._add($h._enter($("#SBF-end"), {
                        type: "fadeOnly",
                        delay: 1000
                    }));

                }); // getCurrentPage()
            }
        ],
        runPage: function(indx, app) {
            if (!this.pages[indx]) return false;
            this.pages[indx](app);
            return true;
        },
        initialize: function() {

        }

    };

    window.Pages = Page;

}(window.jQuery, window.Helper));