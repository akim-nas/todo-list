const getTask = () => {
    const user_input = prompt("Input task");
    return user_input;
};
const addTask = (input) => {
    if (input !== "") {
        const task_btn = document.createElement("button");
        const task_txt = document.createTextNode(input);
        task_btn.setAttribute("class", "task-btn");
        task_btn.setAttribute("id", input);
        task_btn.appendChild(task_txt);
        document.getElementById("task-list").appendChild(task_btn);
    }
};
const removeTask = () => {
};
//# sourceMappingURL=index.js.map