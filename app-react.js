const { Component } = React

const MASTERURL = `https://github.com/chrisbautista/chrisbautista.github.io/tree/master`
const COLOR_CODE = {
    lessons: ' blue lighten-4',
    projects: 'orange lighten-3',
    experiments: 'red lighten-3'
}; 

function debounce(fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const Header = () => (
    <header>
        <h1 class="page-title"> <span>Codespud</span> @ Github </h1>
        <nav>
            <ul>
                <li><a className=" waves-effect waves-light scale-transition" href="http://www.codespud.com">Blog</a></li>
                <li><a className=" waves-effect waves-light scale-transition" href="https://github.com/chrisbautista/">Github</a></li>
            </ul>
        </nav>
    </header>
)

const Footer = () => (
    <footer>
        All rights reserved 2018-2019. Code Spud Web Services Inc.
    </footer>
)

class Tag extends Component {

    handleClick = () => {
        
        this.props.onClickHandler( this.props.text )
    }

    render() {
        let { text, className } = this.props
        return (
            <button className={`btn waves-effect waves-light scale-transition ${className}`} onClick={this.handleClick}> {text} </button>
        )
    }
}

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            hover: false,
        }
    }

    processLink = (link) => {

        if (link.indexOf('__master__')>=0) {
            link = link.replace(/__master__/gi, MASTERURL);
        }

        return link;
    }


    render() {
        let { id, title, links, children, tags, className } = this.props;

        return (
            <div key={id} className={`card ${className}  `}>
                <div className={`card__content`}>
                    <span className={`card__title`}>{title}</span>
                    <p className={`card__description`}>{children}</p>
                    <p className="card__tags">{tags&&tags.map((item)=><span className="tag">{item}</span>)}</p>
                </div>
                <div className={`card__links`}>
                    {(links && links.map(({ label, link }, i) => <a key={i} href={this.processLink(link)} className={`card__link`}>{label}</a>))}
                </div>
            </div >
        )
    }

}
class Folio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            filteredCards : [],
            tags: [],
            filter: '',
            cardState: 'shown'
        }

        this.filterRef = React.createRef();
        this.setFilter = debounce(this.setFilter, 1000);
    }

    componentWillMount = () => {
        fetch('/links.json')
            .then(response => response.json())
            .then(json => this.setState({ cards: json.cards, filteredCards:json.cards }))
    }

    extractTags = () => {
        let { cards } = this.state;
        return cards.map(card => card.tags)
            .reduce((acc, val) => acc.concat(val), [])
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort()
    }

    clearTags = () => {
        this.setState({filter:'', filteredCards: this.state.cards})
    }

    setTag = (text) => {

        if(this.state.filteredCards.length>0){
            //hidefirst then show
            console.log('set filter')
            this.setState({cardState:'hidden'});
        }
       this.setFilter(text)
    }

    setFilter = (filter) => {
        
        if(filter.length>=0){
            let { cards } = this.state;

            let filtered = cards.filter((item, i) => {

                return item.title.indexOf(filter) >= 0 ||
                    item.content.indexOf(filter) >= 0 ||
                    item.tags.indexOf(filter) >= 0
            })

            this.setState({filter:filter, filteredCards: filtered, cardState:'shown'});
        }
    }

    onFilterChange= (e) => {

        if(this.state.filteredCards.length>0){
            //hidefirst then show
            console.log('set filter')
            this.setState({cardState:'hidden'});
        }
        
       // this.setFilter(e.target.value);
    }
   
    render() {

        let { filteredCards } = this.state;

        if (filteredCards.length <= 0) <div>Loading</div>

        let tags = this.extractTags();

        return (
            <div >
                <Header />
                <main>

                    <section id="filter-wrapper" className="container">
                        <div className="row">
                            <div className="col sm12 l12 m12">
                                <i class="material-icons">search</i>
                                <input type="text" name="search"  onChange={this.onFilterChange} ref={this.filterRef}/>
                            </div>
                        </div>
                    </section>
                    <section id="tags-wrapper" className="container">
                        <div className="row">
                           
                            {tags && tags.map((tag, j) => <Tag key={j} onClickHandler={this.setTag} text={tag} />)}
                        </div>
                        
                    </section>
                    <section id="cards-wrapper" className="masonry-wrapper">
                        <div className="row-buttons">
                            {this.state.filter && <Tag key={0} className={`grey darken-1`} onClickHandler={this.clearTags} text={`Reset`} />}
                        </div>
                        <div className="masonry">
                            {
                                filteredCards && shuffle(filteredCards).map(({ links, title, tags, content, group }, i) =>
                                    (<div className={`item ${this.state.cardState}` }><Card id={i}
                                        links={links}
                                        title={title}
                                        tags={tags}
                                        className={COLOR_CODE[group]}>
                                        {content}
                                    </Card></div>)
                                )
                            }
                        </div>
                    </section>

                </main>

                <Footer />
            </div>

        )

    }

}






ReactDOM.render(
    <Folio />, document.getElementById('app')
)




