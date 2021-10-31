const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let todos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleMouseEnter(btn) {
    btn.innerText = "✔"
}

function paintToDo(newToDoObj) {
    const inp = document.createElement("input");
    const lab = document.createElement("label");

    inp.id = newToDoObj.id;
    inp.type = "checkbox"

    lab.id = newToDoObj.id;
    lab.innerText = newToDoObj.text;

    todoList.appendChild(inp);
    todoList.appendChild(lab);

    lab.addEventListener("click", deleteLabel);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }

    todos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function deleteLabel(event){
    const label = event.target;
    label.remove()
    todos = todos.filter((toDo) => toDo.id !== parseInt(label.id));
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);

}