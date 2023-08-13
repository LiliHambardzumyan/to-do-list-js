var inputArea = document.querySelector('.input-area');
var input = document.querySelector('.input')
var addButton = document.querySelector('.add-button');
var containerList = document.getElementsByClassName('container');
var list = document.querySelector('.list');

    document.addEventListener('DOMContentLoaded', getTodos);
    input.addEventListener('click', ()=>{
    document.getElementById('input-text').style.fontSize = "15px";
    document.getElementById('input-text').style.marginBottom = "20px";
    document.getElementById('input-text').style.color = "#23a398"
    document.getElementById('icon').style.color = "#23a398";
    input.style.borderColor = "#23a398";
    })
    addButton.addEventListener('click', listCreator);

function listCreator(){
    if(input.value){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const checkBox = document.createElement('input');
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add('check-box');
    todoDiv.appendChild(checkBox);

    const newToDo = document.createElement('li');
    newToDo.innerHTML = input.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.classList.add('delete-button');
    todoDiv.appendChild(deleteBtn);
    list.appendChild(todoDiv);

    localTodos(input.value);

    input.value = '';
    document.getElementById('input-text').style.color = "#b0b0b0"
    document.getElementById('icon').style.color = "black";
    input.style.borderColor = "#b0b0b0";

    deleteBtn.addEventListener('click', deleteFunc)

function  deleteFunc() {
    if(checkBox.checked){
       todoDiv.remove();
       removeLocalTodo(newToDo.innerHTML);
    }
}
}
}
function localTodos(todo) {
    let arr;
    !localStorage.getItem('todos') ? arr = [] : arr = JSON.parse(localStorage.getItem('todos'));
    arr.push(todo);
    localStorage.setItem('todos', JSON.stringify(arr));
}
function getTodos(){
    let arr;
    !localStorage.getItem('todos') ? arr = [] : arr = JSON.parse(localStorage.getItem('todos'));
    arr.forEach(function(todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");
        checkBox.classList.add('check-box');
        todoDiv.appendChild(checkBox);

        const newToDo = document.createElement('li');
        newToDo.innerHTML = todo;
        newToDo.classList.add('todo-item');
        todoDiv.appendChild(newToDo);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        deleteBtn.classList.add('delete-button');
        todoDiv.appendChild(deleteBtn);
        list.appendChild(todoDiv);

        deleteBtn.addEventListener('click', deleteFunc);
        function  deleteFunc() {
            if(checkBox.checked){
                todoDiv.remove();
                removeLocalTodo(newToDo.innerHTML);
            }
        }
    })
}
function removeLocalTodo(todo) {
    let arr;
    !localStorage.getItem('todos') ? arr = [] : arr = JSON.parse(localStorage.getItem('todos'));
    const a = arr.indexOf(todo);
    arr.splice(a,1);
    localStorage.setItem('todos', JSON.stringify(arr));
}