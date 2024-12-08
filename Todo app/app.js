//got to learn--> dom handeling, createelement, localstorage,keypress,




document.querySelector("#addTodoBtn").addEventListener("click", HandleClick);

let displayTODO = document.querySelector("#displayInsideOl");

function HandleClick() {
  const InputValue = document.querySelector("#todoInput").value;

  if (InputValue === '') {
    alert("enter a task first");
  } else {
    let list = document.createElement("li");
    list.textContent = InputValue;

    let rem = document.createElement('button');
    rem.textContent = 'x';
    rem.style.marginLeft = '200px';


    rem.addEventListener('click', () => {
      list.remove();
      saveData();
    });

    list.appendChild(rem);
    displayTODO.appendChild(list);
    saveData()
  }

  document.querySelector("#todoInput").value = "";
}
document.querySelector('#todoInput').addEventListener('keypress', (e)=>{
  if(event.key === "Enter"){
    HandleClick();
  }
})
function enter(e){
  
}

function saveData() {
  localStorage.setItem("Data", displayTODO.innerHTML);
}

function showData() {
  displayTODO.innerHTML = localStorage.getItem("Data") || '';
  displayTODO.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', function () {
      button.parentElement.remove();
      saveData();
    })
  })
}
showData();