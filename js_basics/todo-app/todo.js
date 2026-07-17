let data = localStorage.getItem('todos');
let todos = data ? JSON.parse(data) : [];
let todoInput = document.querySelector('#todo'); 
let todoContainer = document.querySelector('.todos');

function addTodo() {
    let todoText = todoInput.value.trim();

    if (todoText !== '') {
        todos.push({ text: todoText, completed: false });         
        todoInput.value = ''; 
        saveTodos();
    }
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
    render()
}

function render() {
    todoContainer.innerHTML = ''; 
    
    if (todos.length === 0) {
        todoContainer.innerHTML = `<p>No todos yet.</p>`;
        return; 
    }

    let ul = document.createElement('ul');
    
    todos.forEach((todoItem, index) => {
        createNode(todoItem, ul, index); 
    });
    
    todoContainer.appendChild(ul);
}

function createNode(todoItem, ulElement, index) {
    let textSpan = document.createElement('span');
    textSpan.classList.add('todo-text');        
    textSpan.innerText = todoItem.text;         

    
    let checkbox = document.createElement('input');
    let li = document.createElement('li');
    let del = document.createElement('button');
    
    del.innerText='Delete'
    del.style.marginLeft='7px'
    
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '7px'; 
    
    
    li.appendChild(checkbox);
    // Correctly display the todo text from the object
    li.appendChild(textSpan);   
    // li.insertAdjacentText('beforeend', todoItem.text);
    li.appendChild(del)
    checkbox.checked = todoItem.completed;

    if (todoItem.completed) {
        textSpan.style.textDecoration = 'line-through';
        textSpan.style.color = '#888';
    } else {
        textSpan.style.textDecoration = 'none';
        textSpan.style.color = 'var(--text-dark)'; // Or whatever default color is
    }

    del.addEventListener('click',()=>{
        todos.splice(index,1)
        saveTodos()
    })
    checkbox.addEventListener('change', () => {
        todos[index].completed = checkbox.checked; 
        saveTodos(); 
    });
    
    ulElement.appendChild(li);
}

document.querySelector('#add').addEventListener('click', (e) => {
    addTodo();
});

document.querySelector('#delAll').addEventListener('click', (e) => {
    todos = []
    saveTodos()
});


document.querySelector('#todo').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') { 
        e.preventDefault(); 
        addTodo();
    }
});

render();