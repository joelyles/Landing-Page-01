const modalBox = document.querySelector(".sign-up-modal");
const modal = document.querySelectorAll(".modal");
const exitButton = document.querySelector(".exit");

for (let i = 0; i < modal.length; i++) {
    modal[i].addEventListener("click", () => {
        modalBox.classList.toggle("show");
        window.scrollTo(top);
    })
}

exitButton.addEventListener("click", () => {
    modalBox.classList.toggle("show");
})