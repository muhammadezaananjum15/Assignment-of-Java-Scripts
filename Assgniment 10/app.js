const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const counter = document.getElementById('counter');
const searchField = document.getElementById('searchField');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');

let editIndex = null;

const esc = (s) => {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
};

const refreshCounter = () => {
  const n = todoList.querySelectorAll('li:not(.removing)').length;
  counter.innerHTML = `<b>${n}</b>&nbsp;${n === 1 ? 'task' : 'tasks'}`;
  emptyState.className = n === 0 ? 'show' : '';
};

const refreshSearch = () => {
  const q = searchField.value.toLowerCase().trim();
  todoList.querySelectorAll('li').forEach((li) => {
    if (li.classList.contains('removing')) return;
    const txt = li.querySelector('.todo-text').textContent.toLowerCase();
    li.classList.toggle('hidden', q && !txt.includes(q));
  });
};

const doAdd = () => {
  const val = todoInput.value.trim();
  if (!val) return;

  if (editIndex === null) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="todo-text">${esc(val)}</span>
      <div class="actions">
        <button class="ibtn edit" title="Edit"><i class="fas fa-edit"></i></button>
        <button class="ibtn del" title="Delete"><i class="far fa-trash-alt"></i></button>
      </div>`;
    todoList.appendChild(li);
  } else {
    const item = todoList.querySelectorAll('li')[editIndex];
    if (item) item.querySelector('.todo-text').textContent = val;
    editIndex = null;
    addBtn.textContent = '+ Add';
    addBtn.classList.remove('update');
  }

  todoInput.value = '';
  refreshCounter();
  refreshSearch();
};
addBtn.addEventListener('click', doAdd);
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') doAdd();
});
todoList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

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
      refreshSearch();
    }, 200);
  }

  if (e.target.closest('.edit')) {
    const all = Array.from(todoList.querySelectorAll('li'));
    editIndex = all.indexOf(li);
    todoInput.value = li.querySelector('.todo-text').textContent;
    addBtn.textContent = '✓ Update';
    addBtn.classList.add('update');
    todoInput.focus();
  }
});
searchField.addEventListener('input', () => {
  refreshSearch();
  const hasQ = searchField.value.trim() !== '';
  searchBtn.classList.toggle('active', hasQ);
  searchBtn.innerHTML = hasQ
    ? '<i class="fas fa-times"></i> Clear'
    : '<i class="fas fa-search"></i> Search';
});

searchField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') refreshSearch();
});

searchBtn.addEventListener('click', () => {
  if (searchField.value.trim()) searchField.value = '';
  searchBtn.classList.remove('active');
  searchBtn.innerHTML = '<i class="fas fa-search"></i> Search';
  refreshSearch();
  searchField.focus();
});
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

refreshCounter();
