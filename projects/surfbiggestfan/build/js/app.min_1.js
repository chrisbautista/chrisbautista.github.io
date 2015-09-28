;(function($) {

    var helper = {
        buildAnimation: function(type, config) {
            var option;

            if (type === "fadeTo") {
                if ((config.x1) === undefined ||
                    (config.y1) === undefined) throw "missing coordinates for fadeTo animate";
            }
            config.x2 = config.x2 || config.x1;
            config.y2 = config.y2 || config.y1;

            option = {
                "fadeOnly": {
                    from: {
                        "opacity": 0
                    },
                    to: {
                        "opacity": 1
                    },
                    ease: "easeOutQuart"
                },
                "fadeTo": {
                    from: {
                        "opacity": 0,
                        "left": parseInt(config.x1) + "px",
                        "top": parseInt(config.y1) + "px"
                    },
                    to: {
                        "opacity": 1,
                        "left": parseInt(config.x2) + "px",
                        "top": parseInt(config.y2) + "px",
                        "z-index": "900"
                    },
                    ease: config.easing
                },
                "grow": {
                    from: {
                        "opacity": 0,
                        "left": parseInt(config.x1+(config.width/4)) + "px",
                        "top": parseInt(config.y1+(config.height/4)) + "px",
                        "width": "0px",
                        "height": "0px",
                    },
                    to: {
                        "opacity": 1,
                        "left": parseInt(config.x2) + "px",
                        "top": parseInt(config.y2) + "px",
                        "width": parseInt(config.width) + "px",
                        "height": parseInt(config.height) + "px",
                        "z-index": "900"
                    },
                    ease: "easeInOutBack"
                }
            };



            return option[type];
        },
        enterObject: function(obj, config, callback) {
            var animateTo = {};
            if (!obj) {
                throw "expecting an object";
            }

            if (!obj.created) {
                config = $.extend({
                    type: "fadeTo",
                    x1: 0,
                    y1: 0,
                    x2: null,
                    y2: null,
                    delay: 100,
                    easing: "swing",
                    opacity: 0
                }, config || {});
                callback = $.extend({
                    onEnter: function() {},
                    onExit: function() {}
                }, callback || {});
                animateTo = this.buildAnimation(config.type, config);

                events = {
                    enterObject: function() {
                        obj.css(animateTo.from).animate(animateTo.to, config.delay, animateTo.ease, function() {
                            callback.onEnter();
                        });
                    },
                    removeObject: function() {
                        obj.css(animateTo.to).animate(animateTo.from, config.delay, animateTo.ease, function() {
                            callback.onExit();
                            obj.off();
                        });
                    }
                };

                obj.off("enterObject").bind('enterObject', events.enterObject);
                obj.off("removeObject").bind('removeObject', events.removeObject);

                // attached events
                obj.created = true;

                obj.trigger("enterObject");
            }



            return obj;
        },
        removeObject: function(obj) {
            obj.trigger("removeObject");
        },
        getCenter: function(parentLength, childLength) {
            return parseInt(parentLength / 2 - childLength / 2);
        },
        // aliases
        _enter: function(obj, config, callback) {
           return this.enterObject(obj, config, callback);
        }
    };

    window.Helper = helper;

}(window.jQuery));
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