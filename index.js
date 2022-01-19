class ToDoList {
    constructor() {
        // Add title
        const title = this.createElement('h1', 'title');
        title.innerHTML = "To-Do list";

        // Add description
        const description = this.createElement('p', 'description');
        description.innerHTML = "A simple To-Do list built with vanilla JavaScript, CSS and HTML and DOM manipulation.";

        const alert = this.createElement('p', 'alert');
        alert.innerHTML = "!! Note that the tasks you create here aren't saved permanently. !!";

        // Add form
        const form = this.createElement('div', 'form');

        // Add text input and button to form
        const input = this.createElement('input', 'textinput');
        input.type = "text";
        input.placeholder = "Enter task text";
        input.id = "input-text";
        input.required = true;

        const button = this.createElement('button', 'btn');
        button.type = "button";
        button.innerHTML = "Add task";
        button.onclick = () => this.addTask(input.value);

        form.appendChild(input);
        form.appendChild(button);

        // Open tasks
        const taskContainer = this.createElement('div', 'tasks');
        taskContainer.id = 'tasks';

        const tasksTitle = this.createElement('h5', 'category-title');
        tasksTitle.innerHTML = "Tasks";
        taskContainer.appendChild(tasksTitle);
    }

    /**
     * Creates an element with their tag and class. After the creation it returns this element to reuse it.
     * @param {*} tag 
     * @param {*} className 
     * @returns HTML element
     */
    createElement(tag, className = null) {
        const container = document.getElementById('container');
        const newElement = document.createElement(tag);
        if(className) newElement.className = className;
        container.appendChild(newElement);
        return newElement;
    }

    /**
     * Creates a task element.
     * @param {*} text 
     */
    addTask(text) {
        document.getElementById('input-text').value = null;
        const parent = document.getElementById('tasks');
        parent.appendChild(this.createTaskCard(text));
    }

    /**
     * Creates a so called `task card`. It contains the task text and functions like deleting or closing the task that every task card has.
     * @param {*} text 
     * @param {*} id 
     * @returns HTML element
     */
    createTaskCard(text) {
        const task = this.createElement('div', 'task-card');

        const taskText = this.createElement('h3', 'task-text');
        taskText.innerHTML = text;
        taskText.onclick = () => this.toggleTask(task);

        const deleteTask = this.createElement('button', 'delete-task');
        deleteTask.type = "button";
        deleteTask.id = "delete";
        deleteTask.innerHTML = "X";
        deleteTask.onclick = () => this.deleteTask(task);

        task.appendChild(taskText);
        task.appendChild(deleteTask);
        return task;
    }

    /**
     * Toggle the task state.
     * @param {*} task 
     */
    toggleTask(task) {
        if(task.className === 'task-card') {
            task.className = 'task-card closed';
        } else if(task.className === 'task-card closed') {
            task.className = 'task-card';
        } else {
            throw new Error(`Something is wrong with task ${id}`);
        }
    }

    /**
     * Deletes a task from the `tasks` array and removes the created element.
     * @param {*} task 
     */
    deleteTask(task) {
        const parent = document.getElementById('tasks');
        parent.removeChild(task);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new ToDoList();
});
