declare var _: any;
declare var document: any;
declare var window: any;
declare var domIsReady: any;


class FilterClass {
    private blocks: any; // nodelist
    private filters: any;
    private config: any[];

    private parentSelector: string;
    private itemSelector: string;

    private filterSelector: string;
    private filterId: string;

    constructor(parent: any, filters: any[] = null) {

        this.config = {};

        this.parentSelector = parent || '.list';
        this.itemSelector = '.list-items';
        this.filterSelector = '#filter';
        this.filterId = 'filter';

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
        }, '');

        let template = `
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

        insertBefore(template, parent.parentNode);

    }

    handlers() {

        let filterSelect: any = document.getElementById(this.filterId);
        filterSelect.addEventListener('change', (e) => {
            this.filterCallback(e)
        })

    }

    // callbacks
    filterCallback(e) {
        let filterString = e.target.options[e.target.selectedIndex].value;
        let element = this.blocks;
        console.log('filterString', filterString);

        _.map(this.blocks, function (item) {

            item.style.display = 'hide';

        });

        let divs = element.filter(function (item) {
            if (item.dataset.filter.indexOf(filterString) !== -1) {
                return true;
            }
        });

        _.map(divs, function (item) {
            item.style.display = 'block';
        });

    }


}

(function (document, window, _) {

    domIsReady(function () {
        let filterBlock = new FilterClass('.list');
    });

}(document, window, _));

