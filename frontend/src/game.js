
class Game {
    constructor() {
        this.cardClickCount = 0;
        this.seconds = 0;
        this.timer;
        this.moves = 0;
        this.correct = 0;
        this.wrongMoves = 0;
        this.ended = false;
        this.cardManager = new CardManager();
    }

    

    start() {
        this.cardManager.generateCards();
        this.cardManager.shuffleCards();
        this.cardManager.attachClassToCard();
        this.startTimer();
        this.showMoves();
        this.onRestart();
        this.onClick();
    }

    onClick() {
        const deck = document.querySelector('.deck');

        deck.addEventListener('click', (event) => {
            if (event.target.className.includes('card')) {
                event.target.classList.add('show', 'open');
                this.cardClickCount++;

                if (this.cardClickCount %2 === 0) {
                    this.checkMatch(this.previousId, event.target.id);
                } else {
                    this.previousId = event.target.id;
                }

            }
        });
    }

    onRestart() {
       
    }

    checkMatch(prevId, currId) {
       
       
}

const game = new Game();
game.start();