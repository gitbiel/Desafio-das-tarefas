const btnNewItem = document.querySelector(".createNewItem");
const modal = document.querySelector(".backgroundColorModal")
const btnCloseModal = document.querySelector(".closeModalContainer")
const toDoList = document.querySelector(".backgroundColorCard")

function openModal() {
  modal.style.display = "flex"
  toDoList.style.display = "none"
}

function closeModal() {
  modal.style.display = "none"
  toDoList.style.display = "block"
}