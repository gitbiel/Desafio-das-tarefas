const btnNewItem = document.querySelector(".createNewItem");
const modal = document.querySelector(".backgroundColorModal");
const btnCloseModal = document.querySelector(".closeModalContainer");
const toDoList = document.querySelector(".backgroundColorCard");
const inputTitleModal = document.querySelector(".inputType");
const containerCard = document.querySelector(".containerCard");
const main = document.getElementById('containerToDo');
let inputModal = document.getElementById('inputModal');
let inputTitle = document.getElementById('titleModal');
let inputSelect = document.getElementById('selectModal');
let counter = 0;

// contagem de elementos filhos
const toDoAccount = document.querySelector('#toDo');
toDoAccount.innerHTML = '0'

// drag and drop
const columnToDo = document.getElementById("column-todo") 
const columnDoing = document.getElementById("column-doing") 
const columnDone = document.getElementById("column-done")


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
  let valorInputSelect = inputSelect.value.split(', ')
  console.log(valorInputSelect[1]);
  ++counter;



  let newCard = 
  `<div class="cardCreated" draggable="true">
  <div class="column" style="background: ${valorInputSelect[1]};"></div>
  <div class="elements">
    <div class="titleCard">${valorInputTilte}</div>
    <p class="type">Type:</p>
    <div class="fundo">
      ${valorInputSelect[0]}
    </div>
      ${valorInput}
  </div>
  <div class="setings">
    <svg width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1" cy="1" r="1" fill="#D9D9D9"/>
      <circle cx="1" cy="4" r="1" fill="#D9D9D9"/>
      <circle cx="1" cy="7" r="1" fill="#D9D9D9"/>
    </svg> 
    <p id="counter">0${counter}
    </p>
  </div>
  </div>`;

  main.innerHTML += newCard;

  toDoAccount.innerHTML = main.childElementCount

  console.log(main.childElementCount);
  closeModal()

}

dragCard = newCard


  for(var index of columnToDo){
      index.addEventListener('dragstart', dragStart)
      index.addEventListener('dragend', dragEnd)
  }

  function dragStart(){
    dragCard = this;
    setTimeout(() => this.style.display = "none", 0)
    
  }
  function dragEnd(){
    setTimeout(() => this.style.display = "block", 0)
    dragCard = null
  }

  for(DoingDone of dropzone){
    DoingDone.addEventListener('dragover', dragOver)
    DoingDone.addEventListener('dragenter', dragEnter)
    DoingDone.addEventListener('dragleave', dragLeave)
    DoingDone.addEventListener('drop', Drop)
  }
  function Drop(){ this.append(dragCard) }
     
  function dragOver(e){e.preventDefault()} 
     
  function dragEnter(e){e.preventDefault()}
     
  function dragLeave(){ }

console.log(main.childElementCount);