const openModalBtnEl = document.getElementById("open-modal-btn");
const modalEl = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal-btn");

openModalBtnEl.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  modalEl.classList.add("show");
}

function closeModal() {
  modalEl.classList.remove("show");
}
