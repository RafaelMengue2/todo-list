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

// Adiciona a classe 'deleting' ao deletar uma tarefa
const taskToDelete = document.getElementById('task-to-delete');
taskToDelete.classList.add('deleting');
// Aguarde a conclusão da transição e, em seguida, remova o elemento
taskToDelete.addEventListener('transitionend', () => {
    taskToDelete.remove();
});
