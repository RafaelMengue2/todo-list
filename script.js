const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("tasks");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
                    <input type="checkbox">
                    <span>${taskText}</span>
                    <button class="delete">Excluir</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        // Adicionar evento para excluir a tarefa
        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });
    }
});