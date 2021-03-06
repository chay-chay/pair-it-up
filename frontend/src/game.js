class Game {
  constructor() {
    this.cardClickCount = 0;
    this.seconds = 0;
    this.moves = 0;
    this.correct = 0;
    this.timer;
    this.cardManager = new CardManager();
  }

  start() {
    this.cardManager.generateCards();
    this.cardManager.shuffleCards();
    this.cardManager.attachSrcToCard();
    this.startTimer();
    this.showMoves();
    this.onRestart();
    this.hoverCards();
    this.onClick();
    
  }

  hoverCards(){
    const hoverCards = document.querySelectorAll(".card")
    // const hoverCards = document.querySelector(".card")

    hoverCards.forEach((card) => {
      card.addEventListener('mouseover', (e) =>{
          e.target.style.border = "thick solid pink";
      })
    })

    hoverCards.forEach((card) => {
      card.addEventListener('mouseout', (e) =>{
          e.target.style.borderColor = "";
      })
    })

  }
    

  onClick() {
    const deck = document.querySelector(".deck");
    
    deck.addEventListener("click", (event) => {
      if (event.target.className.includes("card")) {
        // console.log(event.target.id);

        event.target.classList.add("show", "open");
        this.cardClickCount++;
        
        if (this.cardClickCount % 2 === 0) {
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
    // // debugger
    const choice1Class = document.getElementById(prevId).querySelector("img").src;
    const choice2Class = document.getElementById(currId).querySelector("img").src;

    this.trackMoves();

    if (choice1Class === choice2Class) {
      this.correct++;
      this.showScore();
      this.showMoves();
    } else {
      this.showMoves();
      setTimeout(() => {
        choice1Card.classList.remove("open", "show");
        choice2Card.classList.remove("open", "show");
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
    const timer1 = document.querySelector(".timer");
    this.timer = setInterval(() => {
      this.seconds++;
      timer1.innerHTML = this.seconds;
    }, 1000);
  }

  onRestart() {
    const button = document.querySelector(".restart");
    button.addEventListener("click", () => this.restart());
  }

  restart() {
    this.seconds = 0;
    this.moves = 0;
    this.correct = 0;
    this.cardClickCount = 0;
    this.showMoves();
    this.previousId = null;
    $("#winModal").modal("hide");

    const cardList = document.querySelector(".deck").getElementsByTagName("div");
    
    for (let card of cardList) {
      card.classList.remove("show", "open");
    }
  
    
  }

  showScore() {
    if (this.correct === 8) {
      setTimeout(() => {
        // debugger
        $("#winModal").modal("show");
        clearInterval(this.timer);
        // const winModal = document.getElementById('winModal')
        // winModal.style.display = 'flex';
        const winString = `Yay! You win! You took ${this.moves} moves.`;
        const modalText = document.querySelector(".modal-body").querySelector("h6");
        modalText.innerHTML = winString;
        const close = document.querySelector('.close')
        close.addEventListener('click', () => this.close()
        );
      }, 500);
    }
  }

  close(){
      const winModalEnd = document.querySelector('#winModal')
      winModalEnd.style.display = "none";
  }
}

const game = new Game();
// game.start();

