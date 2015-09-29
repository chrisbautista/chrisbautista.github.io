/*
    Module: Application

    custom promo application 
    TODO: refactor for reusability

    chris bautista < chris@codespud.ca >

    jquery
    jquery animate
    my Application Object
*/
(function() {
    'use strict';

    function Application(Mods) {
        this.numPostCardsSent = 0;
        this.currentPage = 0;
        this.render = Mods.animatePages;
        this.pages = Object.keys(this.render);

        this.postcard = Mods.postcard;
        this.currentDesign = '';

        this.listeners = {};
    }

    Application.prototype = {
        getPage: function(page) {
            return this.pages[page];
        },
        nextPage: function() {
            this.currentPage += 1;
            this.route(this.currentPage);
        },
        route: function(page) {
            var currentScreen;
            page = page || 0;

            this.setCurrentPage(page);

            currentScreen = this.getPage(page);
            this.render[currentScreen]();
            this.listeners[currentScreen]();
        },
        init: function() {
            this.route();
        },
        setCurrentPage: function(page) {
            this.currentPage = page;
        },
        reset: function() {
            this.route(1);
            this.route(2);
        },
        restart: function() {
            this.route(2);
        },
        start: function() {
            this.route(1);
        }

    };

    window.Application = Application;

}());