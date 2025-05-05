const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "text";
    input.value = task;
    input.disabled = true;

    const actionDiv = document.createElement("div");
    actionDiv.className = "action-buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => {
      if (editBtn.textContent === "Edit") {
        input.disabled = false;
        input.focus();
        editBtn.textContent = "Save";
      } else {
        input.disabled = true;
        tasks[index] = input.value;
        saveTasks();
        renderTasks();
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    actionDiv.appendChild(editBtn);
    actionDiv.appendChild(deleteBtn);

    li.appendChild(input);
    li.appendChild(actionDiv);

    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", () => {
  const newTask = taskInput.value.trim();
  if (newTask !== "") {
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
});

window.onload = renderTasks;
