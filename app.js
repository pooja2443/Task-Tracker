var taskInput = document.getElementById("task");
var addTaskBtn = document.getElementById("btn");
var tasklist = document.getElementById("task-list");
var clearBtn = document.getElementById("clear-btn");
function addTask() {
    var task = taskInput.value.trim();
    if (task === "")
        return;
    var listItem = document.createElement("li");
    listItem.textContent = task;
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        tasklist.removeChild(listItem);
    };
    listItem.appendChild(deleteBtn);
    tasklist.appendChild(listItem);
    taskInput.value = "";
}
function clearTasks() {
    tasklist.innerHTML = "";
}
addTaskBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearTasks);
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter")
        addTask();
});
