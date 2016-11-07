/**
 * Created by chrisbautista on 2016-11-06.
 */

interface ICard {
    rank: CardValue;
    suit: SuitValue;
}

interface Player {
    name: String;
}

enum SuitValue {Club = 1, Heart, Spade, Diamond}

enum CardValue
{
    Ace = 1, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
}

class Card implements ICard {
    constructor(private rank: CardValue, private suit: SuitValue) {

    }

    getCardName(rank: CardValue) {
        return CardValue[rank];
    }

    getCardValue() {
        return this.rank;
    }

}

class Deck {

    private cards: Card[];

    constructor() {
        this.createDeck();
    }

    createDeck() {

        this.cards = [];

        for (var i = SuitValue.Club; i <= SuitValue.Diamond; i++) {

            for (var j = CardValue.Ace; j <= CardValue.King; j++) {
                this.cards.push(new Card(j, i));
            }

        }
    }

    shuffleDeck() {
        var currentIndex: number = this.cards.length,
            temp: Card,
            randomIndex: number;

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
    }


    getDeck(shuffle: Boolean = true) {

        if (shuffle) {
            this.shuffleDeck();
        }

        return this.cards;
    }

    getTopCard() {

        return this.cards.shift();
    }

}






