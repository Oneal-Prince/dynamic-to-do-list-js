  // Wait until the HTML document is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      // Select DOM elements
      const addButton = document.getElementById('add-task');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');

      // Function to add a task to the list
      function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the task is not empty
        if (taskText === '') {
          alert('Please enter a task.');
          return;
        }

        // Create new list item and set its content
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button and set properties
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Event to remove the task when button is clicked
        removeButton.onclick = () => {
          taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
      }

      // Attach event listener to add button
      addButton.addEventListener('click', addTask);

      // Allow adding tasks with Enter key
      taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          addTask();
        }
      });

      // Optionally invoke addTask on DOMContentLoaded (as specified, though it's typically not necessary)
      // addTask(); // Commented out to avoid adding an empty task on load
    });