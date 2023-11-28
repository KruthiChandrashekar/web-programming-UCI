var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TodoList.prototype.displayTasks = function () {
        var taskList = document.getElementById('taskList');
        if (taskList) {
            taskList.innerHTML = '';
            this.tasks.forEach(function (task, index) {
                var listItem = document.createElement('li');
                listItem.textContent = task;
                taskList.appendChild(listItem);
            });
        }
    };
    return TodoList;
}());

var todoList = new TodoList();
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value.trim();
    if (task !== '') {
        todoList.addTask(task);
        todoList.displayTasks();
        taskInput.value = '';
    }
}
var addTaskBtn = document.getElementById('addTaskBtn');
if (addTaskBtn) {
    addTaskBtn.addEventListener('click', addTask);
}
// Initial display of tasks
todoList.displayTasks();
