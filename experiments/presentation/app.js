(function() {
    'use strict';

    function Presentation(config) {

        var that = this;
        var allSlides, elem;

        // some checking first
        if(!util){
            throw "missing utility class";
        }
        
        // 
        // set config defaults
        // 
        var options = {
            'selector' : ".presentation",
            'theme': "slide",
            'autoStart' :  false,
            'delay': 3000,
            'beforeStart': 0
        };

        options = util.extend(options, config);
        

        var nextClass = "-inViewRight";
        var prevClass = "-inViewLeft";
        var currentForward = "-prevView";
        var currentBackward = "-nextView";

        this.autoStart = options.autoStart;
        this.runTimer = null;
        this.currentSlide = null;
        this.animationEffect = options.theme;
        this.beforeStart = options.beforeStart;
        this.delay = options.delay;

        this.classes = {
            'next' : options.theme + nextClass,
            'prev' : options.theme + prevClass,
            'currentForward': options.theme + currentForward,
            'currentBackward': options.theme + currentBackward
        };

        this.selector = options.selector ;
        this.presentation = util.qs(this.selector);
        this.direction = 'initial';

        if(this.presentation){
            // extract slides
            this.all = [].slice.call(this.presentation.children);
            
        } else throw "presentation html selector returned null";

        if (this.all && this.all.length > 0) {

            this.all.forEach(function(item, key, _allSlides) {
                that.createSlide(item, key, _allSlides);
            });

        } else throw "no slides extracted";

    }

    Presentation.prototype.createSlide = function(item, key, _allSlides) {
        var that = this;

        item.classList.add('slide');
        item.next = key < _allSlides.length - 1 ? _allSlides[key + 1] : false;        
        if(!item.next){ item.next = _allSlides[0]; } // last one
        item.prev = (key > 0) ? _allSlides[key - 1] : false;
        if( (!item.prev) ){ item.prev = _allSlides[_allSlides.length-1];}

        item.onclick = function() {
            that.direction = 'forward';
            that.setNextSlide(this);
        };

        item.ondblclick = function() {
            that.stopTimer();
        };

        return item;
    };
    
    //
    // autorun features
    //
    
    Presentation.prototype.start = function() {
        var that = this;
        var stage = util.qs(this.selector);

        function autoPlay(){
            var those = that;
            that.runTimer = setInterval(function(){
                    those.direction = 'forward';
                    those.setNextSlide(those.currentSlide);
                }, that.delay);
        }
               
        if(this.runTimer === null){ 
            if(!isNaN(this.beforeStart) && this.beforeStart>0){
                window.setTimeout(function(){autoPlay();}, this.beforeStart);
            } else autoPlay();
            stage.dispatchEvent(stage.events.autoPlayOn);
        }
        
    };

    Presentation.prototype.stop = function() {
        var stage = util.qs(this.selector);
        clearInterval(this.runTimer);
        this.runTimer = null;
        stage.dispatchEvent(stage.events.autoPlayOff);
    };

    //
    // helpers
    //
    Presentation.prototype.cleanSlides = function(slide){

        var classes = this.getClasses();
        var allClasses = Object.keys(classes).map(function(k) { return classes[k]; });

        util.removeClassList(slide,allClasses);
        util.removeClassList(slide.prev,allClasses);
        util.removeClassList(slide.next,allClasses);
    };

    Presentation.prototype.setupEvents = function(){
        var that = this;
        var stage = this.presentation;
        var eventHandler;

        stage.events = function (){
            
            var ev = {};
            ev.reset = new Event('reset');
            ev.setCurrentSlide = new Event('setCurrentSlide');
            ev.autoPlayOn = new Event('autoPlayOn');
            ev.autoPlayOff = new Event('autoPlayOff');

            return ev;

        }();

        eventHandler = {
            'reset' : function(e){
                e.preventDefault();
                var those = that;
                var classes = that.getClasses();
                var allClasses = Object.keys(classes).map(function(k) { return classes[k]; });
                util.removeClass(allClasses);

                that.runSlideByIndx(0);
                
            },
            'setCurrentSlide': function(e){
                e.preventDefault();
                
                if(that.direction=='forward'){
                    that.forwardSlide();
                }else if(that.direction=='backward'){
                    that.rollbackSlide();
                }
                
            },
            'autoPlayOn' : function(e){
                e.preventDefault();
                console.log('started Timer');
            },
            'autoPlayOff' : function(e){
                e.preventDefault();
                console.log('stopped Timer');
            
            }

        };

        stage.addEventListener('reset', eventHandler.reset, false);
        stage.addEventListener('setCurrentSlide', eventHandler.setCurrentSlide, false);
        stage.addEventListener('autoPlayOn', eventHandler.autoPlayOn, false);
        stage.addEventListener('autoPlayOff', eventHandler.autoPlayOff, false);
    

    };

    //
    // Setup Timers
    //
    
    Presentation.prototype.setupTimers = function(){
        if(this.autoStart){
            this.start();
        }
    };

    Presentation.prototype.stopTimer = function(){
        if(this.runTimer !== null){
            this.stop();
        }   
    };

    //
    //
    
    Presentation.prototype.getClasses = function(){
        return this.classes;
    };

    Presentation.prototype.addElements= function(){
        var that = this;
        var buildTag = function(nodeType,str){ 
            var elemNode,textNode; 
            elemNode = document.createElement(nodeType); 
            textNode = document.createTextNode(str);
            elemNode.appendChild(textNode); 
            return elemNode;
            };

        this.presentation.appendChild(buildTag('h5',this.presentation.title));

    };    

    Presentation.prototype.reset = function(){
        var stage = util.qs(this.selector);
        stage.dispatchEvent( stage.events.reset );
    };

    Presentation.prototype.init = function() {
        var that = this;
 
        this.addElements();
        this.setupEvents();
        this.setupTimers();
        this.reset();

    };

    //
    // slide control
    // 
    Presentation.prototype.runSlideByIndx = function(indx){

        this.currentSlide = this.all[indx];
        this.currentSlide.classList.add(this.getClasses().next);

    };

    Presentation.prototype.setNextSlide = function(currentSlide){
        var stage = util.qs(this.selector);
        currentSlide = currentSlide || this.all[0];

        this.currentSlide = this.direction === 'forward' ? currentSlide.next : currentSlide.prev ;
        stage.dispatchEvent( stage.events.setCurrentSlide );

    };
    
    Presentation.prototype.forwardSlide = function(slide){
        var pivotSlide = slide || this.currentSlide;
        var that = this;

        if(pivotSlide.prev){

            this.cleanSlides(pivotSlide);
            pivotSlide.classList.add(this.getClasses().next);
            pivotSlide.prev.classList.add(this.getClasses().currentForward);

        }else throw ("end of presentation");       

    };

    Presentation.prototype.rollbackSlide = function(slide){
        var pivotSlide = slide || this.currentSlide;
        var that = this;

        if(pivotSlide.next){

            this.cleanSlides(pivotSlide);            
            pivotSlide.classList.add(this.getClasses().prev);
            pivotSlide.next.classList.add(this.getClasses().currentBackward);

        }else throw ("start of presentation");
    };


    

    window.onload = function() {
        // start tests

        var test = new window.test();

        var allSlides = new Presentation({'autoStart': false, 'beforeStart':2000});
        
        allSlides.init();

    };

}());