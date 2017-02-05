/**
 * Filter Class
 * requires lodash
 */
var FilterClass = (function () {
    function FilterClass(parent, filters, filterTypes) {
        if (filters === void 0) { filters = null; }
        if (filterTypes === void 0) { filterTypes = ['select', 'text']; }
        this.config = {};
        this.itemSelector = '.list-items';
        this.filterSelector = '#filter';
        this.filterId = 'filter';
        this.searchId = 'keyword-filter';
        this.filterTypes = filterTypes;
        this.parentSelector = parent || '.list';
        this.minimumCharacters = 2;
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
        }, '<option value=""> - All - </option>');
        var template = "";
        if (_.indexOf(this.filterTypes, 'text') !== -1) {
            template += "\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                    <input type=\"search\" value=\"\" name=\"keyword-filter\" id=\"keyword-filter\" class=\"form-control\" placeholder=\"enter keyword\">            \n                    </div>\n                </div>\n            </div>\n            ";
        }
        if (_.indexOf(this.filterTypes, 'select') !== -1) {
            template += "\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <select name=\"" + this.filterId + "\" id=\"" + this.filterId + "\" class=\"form-control\">\n                        " + options + "\n                        </select>\n                    </div>\n                </div>\n            </div>\n        ";
        }
        insertBefore(template, parent.parentNode);
    };
    FilterClass.prototype.handlers = function () {
        var _this = this;
        var filterSelect = document.getElementById(this.filterId);
        var filterKeyword = document.getElementById(this.searchId);
        filterSelect.addEventListener('change', function (e) {
            _this.filterSelectCallback(e);
        });
        filterKeyword.addEventListener('keyup', function (e) {
            _this.filterTextCallback(e);
        });
    };
    // callbacks
    FilterClass.prototype.filterSelectCallback = function (e) {
        var filterString = e.target.options[e.target.selectedIndex].value;
        this.filterNodes(filterString);
    };
    FilterClass.prototype.filterTextCallback = function (e) {
        var filterString = e.target.value;
        console.log('keyword', filterString.length, this.minimumCharacters, filterString.length > this.minimumCharacters);
        if ((filterString.length > this.minimumCharacters) || (filterString.length === 0)) {
            this.filterNodes(filterString);
        }
    };
    FilterClass.prototype.filterNodes = function (filterString) {
        var element = this.blocks;
        console.log('filterString', filterString);
        if (filterString.length > 0) {
            this.utilUpdateNodesDisplay(this.blocks, 'none');
            var divs = element.filter(function (item) {
                if (item.dataset.filter.indexOf(filterString) !== -1) {
                    return true;
                }
            });
            this.utilUpdateNodesDisplay(divs, 'block');
        }
        else {
            this.utilUpdateNodesDisplay(this.blocks, 'block');
        }
    };
    FilterClass.prototype.utilUpdateNodesDisplay = function (nodes, style) {
        _.map(nodes, function (item) {
            item.style.display = style;
        });
    };
    return FilterClass;
}());
(function (document, window, _) {
    domIsReady(function () {
        var filterBlock = new FilterClass('.list');
    });
}(document, window, _));
//# sourceMappingURL=app.js.map