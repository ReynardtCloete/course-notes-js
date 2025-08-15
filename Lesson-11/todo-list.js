const todoList = [{
    name: 'make dinner',
    dueDate: '2022-02-22'
}, {
    name: 'wash dises', 
    dueDate: '2022-02-22'
}];


renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    forEach(function(todoObject, index) {

        const {name, dueDate} = todoObject; //This is shorthand for 'const name = todoObject.name' etc//

        const html = `
            <p>
              ${name} ${dueDate}

              <button onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
              ">Delete</button> 

            </p>
        `;

        todoListHtml += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate 
        name,
        dueDate   
    });

    inputElement.value = '';

    renderTodoList();
}