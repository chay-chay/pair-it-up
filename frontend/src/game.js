
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

   

    checkMatch(prevId, currId) {
       
        const choice1Card = document.getElementById(prevId);
        const choice2Card = document.getElementById(currId);
        // const choice1Class = document.getElementById(prevId).getElementsByClassName('toggle')
        // const choice2Class = document.getElementById(currId).getElementsByClassName('toggle')
        const choice1Class = document.getElementById(prevId).querySelector('img').src
        const choice2Class = document.getElementById(currId).querySelector('img').src
       
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

    onRestart() {
        const button = document.querySelector('.restart');

        button.addEventListener('click', () => this.restart());
    }

    restart() {
        this.seconds = 0;
        this.moves = 0;
        this.correct = 0;
        this.cardClickCount = 0;
        this.showMoves();
        this.previousId = null;
        $('#winModal').modal('hide');

        const cardList = document.querySelector('.deck').getElementsByTagName('div');

        for (let card of cardList) {
            card.classList.remove('show', 'open');
        }
    }

    showScore() {
        if (this.correct === 8) {
            
            setTimeout(() => {
                $('#winModal').modal('show');
                // const winModal = document.getElementById('winModal')
                // winModal.style.display = 'flex';
                const winString = `Yay! You win! You took ${this.moves} moves.`

                const modalText = document.querySelector('.modal-body').querySelector('h6');
                modalText.innerHTML = winString;
                // this.promptReplay();
             
                
               
            }, 500);

        }
    }

    // promptReplay() {
    //     const playAgain = document.querySelector('.play-again');

    //     playAgain.addEventListener('click', () => {
    //         this.restart();
    //     })
    // }


}

const game = new Game();
game.start();