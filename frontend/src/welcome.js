const welcomeModal = document.getElementById("myWelcomeModal")
const welcomeCloseButton = document.getElementById('welcome-close')

welcomeCloseButton.addEventListener('click', welcomeClose)
function welcomeClose(e){
    // console.log(e.target);
    welcomeModal.style.display = "none";
    game.start();
    // $("#winModal").modal("show"); // use for shortcut to fix bug
}




// scoreCloseButton.onclick = function(e) {
//     modal.style.display = "none"
// }

// window.onclick = function(e) {
//     console.log(e.target === welcomeModal)
//     if (e.target === welcomeModal) {
//         welcomeModal.style.display = "none";
//     }
//     if (e.target === modal) {
//         modal.style.display = "none";
//     }