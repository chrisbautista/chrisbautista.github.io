/**
 * Created by chrisbautista on 2016-11-06.
 */
var SuitValue;
(function (SuitValue) {
    SuitValue[SuitValue["Club"] = 1] = "Club";
    SuitValue[SuitValue["Heart"] = 2] = "Heart";
    SuitValue[SuitValue["Spade"] = 3] = "Spade";
    SuitValue[SuitValue["Diamond"] = 4] = "Diamond";
})(SuitValue || (SuitValue = {}));
var CardValue;
(function (CardValue) {
    CardValue[CardValue["Ace"] = 1] = "Ace";
    CardValue[CardValue["Two"] = 2] = "Two";
    CardValue[CardValue["Three"] = 3] = "Three";
    CardValue[CardValue["Four"] = 4] = "Four";
    CardValue[CardValue["Five"] = 5] = "Five";
    CardValue[CardValue["Six"] = 6] = "Six";
    CardValue[CardValue["Seven"] = 7] = "Seven";
    CardValue[CardValue["Eight"] = 8] = "Eight";
    CardValue[CardValue["Nine"] = 9] = "Nine";
    CardValue[CardValue["Ten"] = 10] = "Ten";
    CardValue[CardValue["Jack"] = 11] = "Jack";
    CardValue[CardValue["Queen"] = 12] = "Queen";
    CardValue[CardValue["King"] = 13] = "King";
})(CardValue || (CardValue = {}));
var Card = (function () {
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    Card.prototype.getCardName = function (rank) {
        return CardValue[rank];
    };
    Card.prototype.getCardValue = function () {
        return this.rank;
    };
    return Card;
}());
var Deck = (function () {
    function Deck() {
        this.createDeck();
    }
    Deck.prototype.createDeck = function () {
        this.cards = [];
        for (var i = SuitValue.Club; i <= SuitValue.Diamond; i++) {
            for (var j = CardValue.Ace; j <= CardValue.King; j++) {
                this.cards.push(new Card(j, i));
            }
        }
    };
    Deck.prototype.shuffleDeck = function () {
        var currentIndex = this.cards.length, temp, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temp = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
        console.log('shuffled');
    };
    Deck.prototype.getDeck = function (shuffle) {
        if (shuffle === void 0) { shuffle = true; }
        if (shuffle) {
            this.shuffleDeck();
        }
        return this.cards;
    };
    Deck.prototype.getTopCard = function () {
        return this.cards.shift();
    };
    return Deck;
}());
