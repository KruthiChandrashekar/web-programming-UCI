class TodoList {
  private tasks: string[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: string) {
    this.tasks.push(task);
  }


  displayTasks() {
    const taskList = document.getElementById('taskList');
    if (taskList) {
      taskList.innerHTML = '';
      this.tasks.forEach((task, index) => {
        const listItem = document.createElement('li');

        listItem.textContent = task;
        taskList.appendChild(listItem);
      });
    }
  }
}

const todoList = new TodoList();

function addTask() {
  const taskInput = document.getElementById('taskInput') as HTMLInputElement;
  const task = taskInput.value.trim();
  if (task !== '') {
    todoList.addTask(task);
    todoList.displayTasks();
    taskInput.value = '';
  }
}

const addTaskBtn = document.getElementById('addTaskBtn');
if (addTaskBtn) {
  addTaskBtn.addEventListener('click', addTask);
}

// Initial display of tasks
todoList.displayTasks();
