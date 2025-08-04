  // Wait until the HTML document is fully loaded
    
  //document.addEventListener('DOMContentLoaded', () => {
      // Select DOM elements
      //const addButton = document.getElementById('add-task-btn');
      //const taskInput = document.getElementById('task-input');
      //const taskList = document.getElementById('task-list');

      // Function to add a task to the list
      //function addTask() {
        // Get and trim the input value
        //const taskText = taskInput.value.trim();

        // Check if the task is not empty
        //if (taskText === '') {
          //alert('Please enter a task.');
          //return;
        //}

        // Create new list item and set its content
        //const listItem = document.createElement('li');
        //listItem.textContent = taskText;

        // Create remove button and set properties
        //const removeButton = document.createElement('button');
        //removeButton.textContent = 'Remove';
        //removeButton.classList.add('remove-btn');

        // Event to remove the task when button is clicked
        //removeButton.onclick = () => {
          //taskList.removeChild(listItem);
        //};

        // Append the remove button to the list item
        //listItem.appendChild(removeButton);

        // Append the list item to the task list
        //taskList.appendChild(listItem);

        // Clear the input field
        //taskInput.value = '';
      //}

      // Attach event listener to add button
      //addButton.addEventListener('click', addTask);

      // Allow adding tasks with Enter key
      //taskInput.addEventListener('keypress', (event) => {
        //if (event.key === 'Enter') {
          //addTask();
        //}
      //});

      // Optionally invoke addTask on DOMContentLoaded (as specified, though it's typically not necessary)
      // addTask(); // Commented out to avoid adding an empty task on load
    ///});

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