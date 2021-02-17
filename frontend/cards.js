class CardManager {
    constructor(types, cards) {
        this.types = [
            'fa-basketball-ball', 
            'fa-plane', 
            'fa-anchor', 
            'fa-bolt', 
            'fa-cube', 
            'fa-leaf', 
            'fa-bicycle', 
            'fa-bomb', 
        ]
    }

    generateCards() {
        //get copy of types, push types and copy to cards
        // const copy = this.types.slice();
        this.cards = [...this.types, ...this.types]
        console.log(this.cards)
    }


}






