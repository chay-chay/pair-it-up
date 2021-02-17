class CardManager {
    constructor(types, cards) {
        this.types = [
            'image/a1.png', 
            'image/a2.png', 
            'image/a3.png', 
            'image/a4.png', 
            'image/a5.png', 
            'image/a6.png', 
            'image/a7.png', 
            'image/a8.png',  
        ]
    }

    generateCards() {
        //get copy of types, push types and copy to cards
        // const copy = this.types.slice();
        this.cards = [...this.types, ...this.types]
        // console.log(this.cards)
    }

    shuffleCards() {
        let counter = this.cards.length;
        // console.log(counter);
        while (counter > 0) {
            // pick random idx
            let index = Math.floor(Math.random() * counter);
        // console.log(index);
            // decrement counter
            counter--;
            // console.log(counter);
            // swap last element with it
            let temp = this.cards[counter];
            // console.log(temp);
            this.cards[counter] = this.cards[index];
            // console.log(this.cards[counter]);
            // console.log(this.cards[index]);
            this.cards[index] = temp;
            // console.log(this.cards[index]);
        }
    }

    attachClassToCard() {
        const deck = document.querySelector('.deck').querySelectorAll('img');
        let className;

        for (let i = 0; i < deck.length; i++) {
            className = this.cards[i];
            deck[i].src = className;
        }
    }
}









