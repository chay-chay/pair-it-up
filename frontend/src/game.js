
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

    
