// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select the Add Task button
    const addButton = document.getElementById('add-task-btn');
    // Select the task input field
    const taskInput = document.getElementById('task-input');
    // Select the list where tasks will be displayed
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get the value entered in the input field and trim whitespace
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user and return
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Event listener to remove the task when remove button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeBtn);
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener to input field to add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
