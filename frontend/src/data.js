class Data {
  constructor() {
    this.BASE_URL = "http://localhost:3000";
    this.submit;
    this.restartButton();
    
  }

  submit() {
    // $("#winModal").modal("show");
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", () => this.handleSubmit());
  }

  handleSubmit() {
    console.log(`${this.BASE_URL}/topten`);
    this.submitData();
    this.createUser();
    this.getRanks();
  }

  createUser(data) {
    return (
      fetch(`${this.BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => {
          console.error("Error:", error);
        })
    );
  }

  submitData() {
    const name = document.querySelector("#name").value;
    const moves = document.querySelector(".moves");

    if (name != "") {
      const data = { name: name, number: moves.innerText };
      this.createUser(data);
    } 
  }

  getRanks() {
    return fetch(`${this.BASE_URL}/topten`)
      .then((response) => response.json())
      .then((data) => {
        console.log(this);
        this.getScore(data);
      });
  }

  getScore(scores) {
    console.log(scores);
    scores.forEach((e) => {
      let html = document
        .querySelector("#rank")
        .querySelector(".scroll")
        .querySelector("tbody");
       
      html.innerHTML += `
       <tr>
          <td>${e.rank}</td>
           <td>${e.name}</td>
           <td>${e.number}</td>
       </tr>
      `;
      
      $("#winModal").modal("hide");
      
      document.querySelector(".deck").style.display = "none";
      document.querySelector("#rank").style.display = "block";
    })
  };

  restartButton(){
    const restart = document.querySelector('#restart')
    restart.addEventListener("click", () => this.playAgain());

  }
  playAgain(){
    
    document.querySelector("#rank").style.display = "none";
    document.querySelector(".deck").style.display = "flex";
    
    game.restart();
    game.startTimer() 
    
  }
  

}
// const scoresArray = data
// let li = document.createElement('li')
// li.innerText = m['']

// response.map((m) =>{
//   let li = document.createElement('li')
//   li.innerText = m['name']
//   console.log(li)
//   return li;
//   })

let data = new Data();
data.submit();



// let submit = document.querySelector('.submit')
// submit.addEventListener('click', handleSubmit);

// function handleSubmit(e){
//   document.querySelector('#name').value
//   debugger
// }
