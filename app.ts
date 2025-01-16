const taskInput = document.getElementById("task") as HTMLInputElement;
const addTaskBtn = document.getElementById("btn") as HTMLButtonElement;
const tasklist = document.getElementById("task-list") as HTMLUListElement;
const clearBtn = document.getElementById("clear-btn") as HTMLButtonElement;

function addTask() {
    const task = taskInput.value.trim();
    if(task === "") return;

    const listItem = document.createElement("li");
    listItem.textContent =  task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
        tasklist.removeChild(listItem);
    }

    listItem.appendChild(deleteBtn);
    tasklist.appendChild(listItem);

    taskInput.value = "";
}

function clearTasks() {
    tasklist.innerHTML = "";
}

addTaskBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearTasks);
taskInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") addTask();
});
