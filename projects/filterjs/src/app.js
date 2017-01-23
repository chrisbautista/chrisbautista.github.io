var FilterClass = (function () {
    function FilterClass(parent, filters) {
        if (filters === void 0) { filters = null; }
        this.config = {};
        this.parentSelector = parent || '.list';
        this.itemSelector = '.list-items';
        this.filterSelector = '#filter';
        this.filterId = 'filter';
        blocks = Array.from(document.querySelectorAll(this.parentSelector + " " + this.itemSelector));
        this.blocks = blocks;
        if (blocks.length > 0) {
            filters = filters || this.extractFilter(blocks);
            this.config.filters = filters;
            this.renderFilter();
            this.handlers();
        }
        else {
            console.log('Nodes not found');
        }
        return false;
    }
    FilterClass.prototype.extractFilter = function () {
        return _.uniq(_.flattenDeep(_.map(this.blocks, function (item) {
            return (item.getAttribute('data-filter').split(' '));
        })));
    };
    FilterClass.prototype.renderFilter = function () {
        var parent = document.querySelector(this.parentSelector);
        var options = _.reduce(this.config.filters, function (options, item, key) {
            return options + "<option value=\"" + item + "\"> " + item + " </option>";
        }, '');
        var template = "\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <select name=\"" + this.filterId + "\" id=\"" + this.filterId + "\" class=\"form-control\">\n                        " + options + "\n                        </select>\n                    </div>\n                </div>\n            </div>\n        ";
        insertBefore(template, parent.parentNode);
    };
    FilterClass.prototype.handlers = function () {
        var _this = this;
        var filterSelect = document.getElementById(this.filterId);
        filterSelect.addEventListener('change', function (e) {
            _this.filterCallback(e);
        });
    };
    // callbacks
    FilterClass.prototype.filterCallback = function (e) {
        console.log(e);
    };
    return FilterClass;
}());
(function (document, window, _) {
    domIsReady(function () {
        var filterBlock = new FilterClass('.list');
    });
}(document, window, _));
//# sourceMappingURL=app.js.map