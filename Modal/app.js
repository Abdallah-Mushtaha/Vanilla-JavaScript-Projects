// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// listen for click events on modal-btn and close-btn  to open and close the modal
// it's familiar logic as the sidebar and navbar
modalBtn.addEventListener('click', () => {
    // if (!(modalOverlay.classList.contains('open-modal'))) {
    //     modalOverlay.classList.add('open-modal');
    // }
    modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal');
})


// automatically open modal after 2 seconds of page load without user interaction 
window.onload = () => {
    setTimeout(() => {
        modalOverlay.classList.add('open-modal');
    }, 200);
}