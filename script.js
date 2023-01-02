const btnNewItem = document.querySelector(".createNewItem");
const modal = document.querySelector(".backgroundColorModal");
const btnCloseModal = document.querySelector(".closeModalContainer");
const toDoList = document.querySelector(".backgroundColorCard");
const inputTitleModal = document.querySelector(".inputType");

const containerCard = document.querySelector(".containerCard");

let inputModal = document.getElementById('inputModal')
let inputTitle = document.getElementById('titleModal')

const main = document.getElementById('areaCard');

function openModal() {
  modal.style.display = "flex";
  toDoList.style.display = "none";
  document.querySelector(".inputType").focus();
}

function closeModal() {
  modal.style.display = "none";
  toDoList.style.display = "block";
}

function createCard() {
  let valorInputTilte = inputTitle.value;
  let valorInput = inputModal.value;
  
  if ((valorInput !== "") && (valorInput !==null) && (valorInput!== undefined));
  let newCard = `<div class="cardCreated">
  <div class="column"></div>
  <div class="elements">
    ${valorInputTilte}
    <p class="type">Type:</p>
    <div class="fundo">
      <p>Saúde</p>
    </div>
      ${valorInput}
  </div>
  <div class="setings">
    <svg width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1" cy="1" r="1" fill="#D9D9D9"/>
      <circle cx="1" cy="4" r="1" fill="#D9D9D9"/>
      <circle cx="1" cy="7" r="1" fill="#D9D9D9"/>
    </svg> 
    <p>01</p>
  </div>
  </div>`;

  main.innerHTML += newCard;
  closeModal()
}