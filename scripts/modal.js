const modalBox = document.querySelector(".sign-up-modal");
const mainButton = document.querySelector(".main-button");
const exitButton = document.querySelector(".exit");

mainButton.addEventListener("click", () => {
    modalBox.classList.toggle("show");
})

exitButton.addEventListener("click", () => {
    modalBox.classList.toggle("show");
})