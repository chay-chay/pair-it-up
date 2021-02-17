
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
                console.log(event.target.id)
               
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
        const button = document.querySelector('.restart');

        button.addEventListener('click', () => this.restart());
    }

    checkMatch(prevId, currId) {
       
        const choice1Card = document.getElementById(prevId);
        const choice2Card = document.getElementById(currId);
        const choice1Class = document.getElementById(prevId).getElementsByClassName('toggle')
        const choice2Class = document.getElementById(currId).getElementsByClassName('toggle').querySelector('img')
        // const choice1Class = document.getElementById(prevId).getAttribute('src')
        // const choice2Class = document.getElementById(currId).getAttribute('src')
        // const choice1Class = document.getElementById(prevId).getElementsByClassName('toggle')[0].classList[1];
        // const choice2Class = document.getElementById(currId).getElementsByClassName('toggle')[0].classList[1];
        this.trackMoves();  
       
        if (choice1Class === choice2Class) {
            this.correct++;
            this.showScore();
            this.showMoves();
            return;
        } else {
            this.wrongMoves++;
            this.showMoves();
            
            setTimeout(() => {
                choice1Card.classList.remove('open', 'show');
                choice2Card.classList.remove('open', 'show');
            }, 500);

        }
    }

    trackMoves() {
        this.moves++;
    }

    showMoves() {

        const moves = document.querySelector(".moves");

        moves.innerHTML = this.moves;
    }

    startTimer(status) {

        const timer = document.querySelector(".timer");
        this.timer = setInterval(() => {

            this.seconds++
            timer.innerHTML = this.seconds;
        }, 1000);
    }

    restart() {
        this.seconds = 0;
        this.moves = 0;
        this.correct = 0;
        this.starIdx = 5;
        this.cardClickCount = 0;
        this.showMoves();
        this.previousId = null;
        $('#winModal').modal('hide');

        const cardList = document.querySelector('.deck').getElementsByTagName('div');
       

        for (let card of cardList) {
            card.classList.remove('show', 'open');
        }

        // for (let star of starList) {
        //     star.style.display = 'inline';
        // }
    }

    showScore() {
        if (this.correct === 8) {
            setTimeout(() => {
                const winString = `You win. You took ${this.seconds} seconds. 
                Would you like to play again?`

                const modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = winString;
                this.promptReplay();
             
                
                $('#winModal').modal('show');
            }, 500);

        }
    }

    promptReplay() {
        const playAgain = document.querySelector('.play-again');

        playAgain.addEventListener('click', () => {
            this.restart();
        })
    }


}

const game = new Game();
game.start();