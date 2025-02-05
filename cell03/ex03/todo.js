const ftList = document.getElementById("ft_list");
const newTaskButton = document.getElementById("newTask");

function loadTasks() {
    const tasks = getCookie("tasks");
    if (tasks) {
        const taskArray = JSON.parse(tasks);
        taskArray.forEach(task => addTask(task));
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".task").forEach(task => {
        tasks.push(task.textContent);
    });
    document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return "";
}

function addTask(taskText) {
    if (!taskText) return;
    const task = document.createElement("div");
    task.classList.add("task");
    task.textContent = taskText;

    task.addEventListener("click", () => {
        if (confirm("Do you want to delete this task?")) {
            task.remove();
            saveTasks();
        }
    });

    ftList.prepend(task); 
    saveTasks();
}

newTaskButton.addEventListener("click", () => {
    const taskText = prompt("Enter your new task:");
    addTask(taskText);
});

loadTasks();