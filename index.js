const addItem = (user_task) => {
    const p_itm = document.createElement("button");
    const p_txt = document.createTextNode(user_task);
    p_itm.classList.add("user-task");
    p_itm.appendChild(p_txt);
    document.getElementById("todoList").appendChild(p_itm);
};
const getTask = () => {
    let user_task = prompt("Input task: ");
    if (user_task != "") {
        addItem(user_task);
    }
};
//# sourceMappingURL=index.js.map