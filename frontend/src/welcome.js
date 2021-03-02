const welcomeModal = document.getElementById("myWelcomeModal")
const welcomeCloseButton = document.getElementById('welcome-close')

welcomeCloseButton.addEventListener('click', welcomeClose)
function welcomeClose(e){
    welcomeModal.style.display = "none";
    game.start();
    // $("#winModal").modal("show"); // use for shortcut to fix rank
}




