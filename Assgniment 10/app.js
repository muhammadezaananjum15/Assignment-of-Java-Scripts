const todoInput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');
const emptyState = document.querySelector('#emptyState');
const counter = document.querySelector('#counter');
let editIndex = null;

// Escape HTML to avoid XSS
const esc = (s) => {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
};

// Update task counter and empty state
function refreshCounter() {
  const n = todoList.querySelectorAll('li:not(.removing)').length;
  counter.innerHTML = `<b>${n}</b> ${n === 1 ? 'task' : 'tasks'}`;
  emptyState.className = n === 0 ? 'show' : '';
}

// Add or update a task
function doAdd() {
  const val = todoInput.value.trim();
  if (!val) return;

  if (editIndex === null) {
    // Add new task
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="todo-text">${esc(val)}</span>
      <div class="actions">
        <button class="ibtn done-btn" title="Mark done"><i class="fas fa-check"></i></button>
        <button class="ibtn edit" title="Edit"><i class="fas fa-edit"></i></button>
        <button class="ibtn del" title="Delete"><i class="far fa-trash-alt"></i></button>
      </div>`;
    todoList.appendChild(li);
  } else {
    // Update existing task
    const li = todoList.querySelectorAll('li')[editIndex];
    li.querySelector('.todo-text').textContent = val;
    editIndex = null;
    addBtn.textContent = '+ Add';
    addBtn.classList.remove('update');
  }

  todoInput.value = '';
  todoInput.focus();
  refreshCounter();
}

// Handle click actions on tasks
todoList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  // Delete task
  if (e.target.closest('.del')) {
    li.classList.add('removing');
    setTimeout(() => {
      li.remove();
      if (editIndex !== null) {
        editIndex = null;
        addBtn.textContent = '+ Add';
        addBtn.classList.remove('update');
      }
      refreshCounter();
    }, 200);
    return;
  }

  // Edit task
  if (e.target.closest('.edit')) {
    const all = Array.from(todoList.querySelectorAll('li'));
    editIndex = all.indexOf(li);
    todoInput.value = li.querySelector('.todo-text').textContent;
    addBtn.textContent = '✓ Update';
    addBtn.classList.add('update');
    todoInput.focus();
    return;
  }

  // Mark done / toggle complete
  if (e.target.closest('.done-btn')) {
    li.classList.toggle('done');
  }

  refreshCounter();
});

// Add task on button click or Enter
addBtn.addEventListener('click', doAdd);
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') doAdd();
});

// Clear all tasks
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
  Array.from(todoList.querySelectorAll('li')).forEach((li, i) => {
    setTimeout(() => {
      li.classList.add('removing');
      setTimeout(() => {
        li.remove();
        refreshCounter();
      }, 200);
    }, i * 50);
  });
  editIndex = null;
  addBtn.textContent = '+ Add';
  addBtn.classList.remove('update');
});

// Initial counter
refreshCounter();
