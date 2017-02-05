declare var _: any;
declare var document: any;
declare var window: any;
declare var domIsReady: any;

/**
 * Filter Class
 * requires lodash
 */
class FilterClass {
    private blocks: any; // nodelist
    private filters: any;
    private config: any[];


    private parentSelector: string;
    private itemSelector: string;

    private filterSelector: string;
    private filterId: string;
    private searchId: string;
    private filterTypes: string[];
    private minimumCharacters: number;


    constructor(parent: any, filters: any[] = null, filterTypes: string[] = ['select', 'text']) {

        this.config = {};

        this.itemSelector = '.list-items';
        this.filterSelector = '#filter';
        this.filterId = 'filter';
        this.searchId = 'keyword-filter';

        this.filterTypes = filterTypes;
        this.parentSelector = parent || '.list';
        this.minimumCharacters = 2;

        blocks = Array.from(document.querySelectorAll(`${this.parentSelector} ${this.itemSelector}`));

        this.blocks = blocks;

        if (blocks.length > 0) {

            filters = filters || this.extractFilter(blocks);

            this.config.filters = filters;

            this.renderFilter();
            this.handlers();


        } else {
            console.log('Nodes not found');
        }

        return false;

    }

    extractFilter() {
        return _.uniq(_.flattenDeep(_.map(this.blocks, function (item) {
            return (item.getAttribute('data-filter').split(' '));
        })));
    }

    renderFilter() {

        let parent = document.querySelector(this.parentSelector);

        let options = _.reduce(this.config.filters, function (options, item, key) {
            return `${options}<option value="${item}"> ${item} </option>`;
        }, '<option value=""> - All - </option>');

        let template = "";

        if (_.indexOf(this.filterTypes, 'text') !== -1) {
            template += `
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                    <input type="search" value="" name="keyword-filter" id="keyword-filter" class="form-control" placeholder="enter keyword">            
                    </div>
                </div>
            </div>
            `
        }
        if (_.indexOf(this.filterTypes, 'select') !== -1) {
            template += `
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <select name="${this.filterId}" id="${this.filterId}" class="form-control">
                        ${options}
                        </select>
                    </div>
                </div>
            </div>
        `;
        }

        insertBefore(template, parent.parentNode);

    }

    handlers() {

        let filterSelect: any = document.getElementById(this.filterId);
        let filterKeyword: any = document.getElementById(this.searchId);
        filterSelect.addEventListener('change', (e) => {
            this.filterSelectCallback(e)
        })

        filterKeyword.addEventListener('keyup', (e) => {
            this.filterTextCallback(e)
        })

    }

    // callbacks
    filterSelectCallback(e) {
        let filterString = e.target.options[e.target.selectedIndex].value;
        this.filterNodes(filterString);
    }

    filterTextCallback(e) {
        let filterString = e.target.value;
        console.log('keyword', filterString.length, this.minimumCharacters, filterString.length > this.minimumCharacters)
        if ((filterString.length > this.minimumCharacters) || (filterString.length === 0)) {
            this.filterNodes(filterString);
        }
    }

    filterNodes(filterString) {
        let element = this.blocks;
        console.log('filterString', filterString);

        if (filterString.length > 0) {
            this.utilUpdateNodesDisplay(this.blocks, 'none');

            let divs = element.filter(function (item) {
                if (item.dataset.filter.indexOf(filterString) !== -1) {
                    return true;
                }
            });

            this.utilUpdateNodesDisplay(divs, 'block');
        } else {
            this.utilUpdateNodesDisplay(this.blocks, 'block');
        }

    }

    utilUpdateNodesDisplay(nodes, style) {
        _.map(nodes, function (item) {

            item.style.display = style;

        });

    }

}

(function (document, window, _) {

    domIsReady(function () {
        let filterBlock = new FilterClass('.list');
    });

}(document, window, _));

