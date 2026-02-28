const ul = document.querySelector('#myList');
const input = document.querySelector('#myInput');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('#clearBtn');
const countText = document.querySelector('#countText');
function updateCount() {
  const total = ul.querySelectorAll('li').length;
  const done = ul.querySelectorAll('li.done').length;
  countText.textContent = `${total - done} task${total - done !== 1 ? 's' : ''} left`;
}
updateCount();

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <div class="circle"><span class="tick">✓</span></div>
    <span class="task-text">${text}</span>
    <button class="del">✕</button>
  `;
  ul.prepend(li);
  input.value = '';
  input.focus();
  updateCount();
}
addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});
ul.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  if (e.target.classList.contains('del')) {
    li.remove();
  } else {
    li.classList.toggle('done');
  }
  updateCount();
});
clearBtn.addEventListener('click', () => {
  ul.querySelectorAll('li.done').forEach((li) => li.remove());
  updateCount();
});
