document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        
        // Task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);
        
        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => editTask(taskSpan));
        li.appendChild(editBtn);
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => li.remove());
        li.appendChild(deleteBtn);
        
        document.getElementById('todo-list').appendChild(li);
        input.value = "";  // Clear the input
    }
}

function editTask(taskSpan) {
    const newTaskText = prompt("Edit your task:", taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskSpan.textContent = newTaskText.trim();
    }
}
