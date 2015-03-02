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