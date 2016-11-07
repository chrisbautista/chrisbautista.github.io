/**
 * Created by chrisbautista on 2016-11-06.
 */
(function (document) {
    var Player = (function () {
        function Player(name) {
            this.name = name;
            this.hand = [];
        }
        Player.prototype.getName = function () {
            return this.name;
        };
        Player.prototype.setCard = function (card) {
            this.hand.push(card);
        };
        Player.prototype.getCard = function (index) {
            if (index === void 0) { index = 0; }
            return this.hand[index].rank;
        };
        return Player;
    }());
    var hiLo = (function () {
        function hiLo(playerNames) {
            this.scores = [];
            this.players = [];
            console.log('start app');
            for (var j = 0; j < playerNames.length; j++) {
                this.players.push(new Player(playerNames[j]));
            }
        }
        hiLo.prototype.match = function () {
            var matches = [];
            this.deck = new Deck();
            this.deck.shuffleDeck();
            console.log(this.deck);
            // build hands
            this.getHands();
            return this.getScore();
        };
        hiLo.prototype.getHands = function () {
            console.log(this.players);
            for (var i = 0; i < hiLo.maxGame; i++) {
                var whoWon;
                for (var index in this.players) {
                    this.players[index].setCard(this.deck.getTopCard());
                }
            }
            console.log(this.players);
        };
        hiLo.prototype.getScore = function () {
            var frequency = {}; // array of frequency.
            var max = 0; // holds the max frequency.
            var result; // holds the max frequency element.
            for (var i = 0; i < hiLo.maxGame; i++) {
                var scores = [];
                var indexOfHighest = 0;
                for (var index in this.players) {
                    scores[index] = this.players[index].getCard(i);
                }
                indexOfHighest = scores.indexOf(Math.max.apply(Math, scores));
                console.log(scores);
                this.scores[i] = this.players[indexOfHighest].getName();
                ;
            }
            console.log(this.scores);
            for (var v in this.scores) {
                frequency[this.scores[v]] = (frequency[this.scores[v]] || 0) + 1; // increment frequency.
                if (frequency[this.scores[v]] > max) {
                    max = frequency[this.scores[v]]; // update max.
                    result = this.scores[v]; // update result.
                }
            }
            this.winner = result;
        };
        hiLo.prototype.display = function (el) {
            var str = '<table class="table table-striped table-bordered">';
            str += "<tr >";
            for (var i in this.players) {
                str += "<th >" + this.players[i].getName() + "</th>";
            }
            str += "<th class=\"col-md-2\">Winner</th>";
            str += '</tr>';
            for (var j = 0; j < hiLo.maxGame; j++) {
                str += "<tr>";
                for (var i in this.players) {
                    str += "<td >" + CardValue[this.players[i].getCard(j)] + "</td>";
                }
                str += "<td >" + this.scores[j] + "</td>";
                str += '</tr>';
            }
            str += '</table>';
            str += "<div class=\"alert alert-info\">Winner is " + this.winner + "!</div>";
            el[0].innerHTML = str;
        };
        return hiLo;
    }());
    hiLo.maxGame = 5; // best of five
    var el = document.getElementsByClassName('container');
    var app = new hiLo(["Mickey", "Goofy"]);
    app.match();
    app.display(el);
}(document));
