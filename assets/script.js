var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var initialArray = [];

// TODO: Creates list items for the todo list
function renderTodos() {
  // TODO: We are making an empty string for the todoList variable inside of the inner html, and displaying text content for the length of the list
  todoList.innerHTML = "";
  todoCountSpan.textContent = initialArray.length;
  
  // TODO: The i increments by 1 to the total length of todos to determine length of list, then the var li creates list elements for each increment of i that increases, 
  for (var i = 0; i < initialArray.length; i++) {
    var todo = initialArray[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
function init() {
  // TODO: Puts the storedTodos into local storage, 
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: If storedTodos has a value then todos will then equal the value of storedTodos
  if (storedTodos !== null) {
    initialArray = storedTodos;
  }
  // TODO: runs renderTodos function
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(initialArray));
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  initialArray.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    initialArray.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
