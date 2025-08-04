 

    document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Initialize task array from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Function to save current tasks array to localStorage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to render a task into the DOM
  function renderTask(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Remove task from DOM and Local Storage
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
      tasks = tasks.filter(task => task !== taskText);
      saveTasks();
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  }

  // Load existing tasks on page load
  function loadTasks() {
    tasks.forEach(task => renderTask(task));
  }

  // Add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Avoid duplicates (optional)
    if (tasks.includes(taskText)) {
      alert('Task already exists.');
      return;
    }

    renderTask(taskText);
    tasks.push(taskText);
    saveTasks();
    taskInput.value = '';
  }

  // Event Listeners
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Initial load from localStorage
  loadTasks();
});