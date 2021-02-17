const welcomeModal = document.getElementById("myWelcomeModal")
const wordControlButtons = document.getElementById('word-control-buttons')
let welcomeCloseButton = document.getElementById('welcome-close')

welcomeCloseButton.addEventListener('click', welcomeClose)
function welcomeClose(e){
    // console.log(e.target);

    welcomeModal.style.display = "none";
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