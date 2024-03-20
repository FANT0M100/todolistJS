const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(e) {
  e.preventDefault();

  //create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //check mark button
  const complitedButton = document.createElement("button");
  complitedButton.innerHTML = `<i class='fas fa-check'></i>`;
  complitedButton.classList.add("complete-btn");
  todoDiv.appendChild(complitedButton);

  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class='fas fa-trash'></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //apend to list
  todoList.appendChild(todoDiv);
}
