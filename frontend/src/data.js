class Data {
  constructor() {
    this.BASE_URL = "http://localhost:3000";
    this.submit
  }

  submit() {
    // $("#winModal").modal("show");
    const submit = document.querySelector('.submit');
    submit.addEventListener("click", () => this.handleSubmit());
  }

  handleSubmit(){
    console.log(`${this.BASE_URL}/topten`)
  document.querySelector('#name').value
  this.getUser();
  this.getRanks();
  
  
  }

  getUser(data) {
    return fetch(`${this.BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      // .then((response) => console.log(response))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  getRanks() {
    return fetch(`${this.BASE_URL}/topten`)
    .then((response) => response.json())
    .then((data => {console.log(this)
      this.getScore(data)}));
  }



  getScore(scores){

    console.log(scores)
    scores.forEach(e => {
       
      let html = document.querySelector('#rank').querySelector('.scroll').querySelector('tbody')
      html.innerHTML +=
      `
       <tr>
          <td>${e.rank}</td>
           <td>${e.name}</td>
           <td>${e.number}</td>
       </tr>
      `
     
      $("#winModal").modal("hide");
      document.querySelector('.deck').style.display = 'none'
      document.querySelector('#rank').style.display = 'block'
      
      
      });
  
    // const scoresArray = data
    // let li = document.createElement('li')
    // li.innerText = m['']

    
    // response.map((m) =>{
    //   let li = document.createElement('li')
    //   li.innerText = m['name']
    //   console.log(li)
    //   return li;
    //   })
  }
}
let data = new Data 
data.submit() 
// let submit = document.querySelector('.submit')
// submit.addEventListener('click', handleSubmit);

// function handleSubmit(e){
//   document.querySelector('#name').value
//   debugger
// }