/**
 *
 * Promo App
 *
 * Usage: 
 *     1) load a page configuration file ( check Page.js for page configuration )
 *     2) use functions to setup and navigate app
 *
 *  TODO refactor
 */

;(function($, helper) {

    var Promo = {
        stage: {
            center: 750 / 2,
        },
        currentPage: {
            index: 0,
            children: [],
            purge: function() {
                var self = this;
                $.each(this.children, function() {
                    helper.removeObject(this);
                });
                if (!this.saved[this.index]) {
                    this.saved[this.index] = this.children;
                }
            },
            saved: []
        },
        getPage: function() {
            this.page.runPage(this.currentPage.index, this);
        },
        _add: function(obj) {
            this.addSprite(obj);
        },
        addSprite: function(obj) {
            this.currentPage.children.push(obj);
        },
        getCurrentPage: function() {
            return $($(".divstage")[this.currentPage.index]);
        },
        setNextPage: function(indx) {
            this.currentPage.index = indx || (this.currentPage.index + 1);
            return $($(".divstage")[this.currentPage.index]);
        },
        init: function(config) {
            this.page = config.page;
            this.page.initialize();
        },
        start: function() {
            var self = this;
            self.getPage();
        },
        nextPage: function() {
            var self = this;
            this.currentPage.purge();
            this.getCurrentPage().fadeOut(1000, function() {
                self.setNextPage().fadeIn(1000, self.getPage());
            });
        }

    };


    window.Promo = Promo;

}(window.jQuery, window.Helper));
