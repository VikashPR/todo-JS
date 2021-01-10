// *Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//*Event Listner
todoButton.addEventListener("click",addTodo);

function addTodo(event)
{
    // *This will stop browser from default submiting 
    event.preventDefault();

    //* adding todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //* create li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //*Check done button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    //*Check Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //*appending to the Html page
    todoList.appendChild(todoDiv);

    // *clear form input value 
    todoInput.value = '';

}
