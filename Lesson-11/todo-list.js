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

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        const html = `
            <p>
              ${name} ${dueDate}

              <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
              ">Delete</button> 

            </p>
        `;

        todoListHtml += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);

    inputElement.value = '';

    renderTodoList();
}