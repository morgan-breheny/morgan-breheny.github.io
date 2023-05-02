const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();

  if (task !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    span.textContent = task;
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    taskInput.value = '';
  }
});

todoList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('deleteBtn')) {
    const li = target.parentNode;
    todoList.removeChild(li);
  }
});
