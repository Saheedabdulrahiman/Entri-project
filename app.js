// app.js

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    // Create a new task item
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = `
      <span>${taskInput.value}</span>
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="removeTask(this)">Remove</button>
    `;
  
    // Append the new task to the task list
    taskList.appendChild(newTask);
  
    // Clear the input field
    taskInput.value = '';
  }
  
  // Function to mark a task as completed
  function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle('completed');
  }
  
  // Function to remove a task
  function removeTask(button) {
    const taskItem = button.parentNode;
    const taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
  }
  