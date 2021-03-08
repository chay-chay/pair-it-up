const welcomeModal = document.getElementById("myWelcomeModal")
const welcomeCloseButton = document.getElementById('welcome-close')

welcomeCloseButton.addEventListener('click', welcomeClose)
function welcomeClose(e){
    welcomeModal.style.display = "none";
    game.start();
    
    // $("#winModal").modal("show"); // use for shortcut to fix rank
}


// const win = document.getElementById('win')
// win.addEventListener('click', handleClick)
// function handleClick(){
//     fetch(`http://localhost:3000/topten`) // make get request to a server and get back response
//     .then((response) => response.json())
//     .then((data) => {
      
//       console.log(this);
//     //   console.log(data.getScore(scores))
//     //   this.getScore(data);
//     alert(data)
    
//     });
    
    
// }

