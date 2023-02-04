const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = '';
});

function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <button type="button">Delete</button>
  `;
  taskList.appendChild(li);

  li.querySelector('button').addEventListener('click', () => {
    li.remove();
  });
}
