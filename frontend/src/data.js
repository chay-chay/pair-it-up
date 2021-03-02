class Data {
  constructor() {
    this.BASE_URL = "http://localhost:3000";
    this.submit;
    this.restartButton();
  }

  submit() {
    // $("#winModal").modal("show"); // use for debug
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", () => this.handleSubmit());
  }

  handleSubmit() {
    // console.log(`${this.BASE_URL}/topten`);
    const name = document.querySelector("#name").value;
    const moves = document.querySelector(".moves");

    if (name != "") {
      const data = { name: name, number: moves.innerText };
      this.createUser(data);
     
    } 
    // this.submitData();
    // this.createUser();
    // this.getRanks();
  }


  createUser(data) {
    return (
      fetch(`${this.BASE_URL}/users`, {
        method: "POST",
        headers: { // Headers — Additional metadata passed to the API to help the server(tell inf about body)
          "Content-Type": "application/json", // Indicates the media type of the resource.
          Accept: "application/json", // Informs the server about the types of data that can be sent back.
        },
        body: JSON.stringify(data), // actual content 
      })

        .then((response) => response.json()) // making asynchronous calls 
        .then((response) => {
          console.log(response)
          this.getRanks();
       })
        
        .catch((error) => {
          console.error("Error:", error);
        })
        
    );
    
  }

  
  getRanks() {
    return fetch(`${this.BASE_URL}/topten`) // make get request to a server and get back response
      .then((response) => response.json())
      .then((data) => {
        // debugger
        console.log(this);
        this.getScore(data);
      });
  }

  getScore(scores) {
    console.log(scores);
    // scores.sort();
    // scores.reverse();
    scores.forEach((e) => {
      let html = document.querySelector("#rank").querySelector(".scroll").querySelector("tbody"); 
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
  
    game.restart(); //global var can call anywhere (Jenn)
    game.startTimer() 
    let rank = document.querySelector("#rank").querySelector(".scroll").querySelector("tbody");
    rank.innerHTML = ""
  }
  
}

let data = new Data();
data.submit();










// const scoresArray = data
// let li = document.createElement('li')
// li.innerText = m['']

// response.map((m) =>{
//   let li = document.createElement('li')
//   li.innerText = m['name']
//   console.log(li)
//   return li;
//   })





// let submit = document.querySelector('.submit')
// submit.addEventListener('click', handleSubmit);

// function handleSubmit(e){
//   document.querySelector('#name').value
//   debugger
// }
