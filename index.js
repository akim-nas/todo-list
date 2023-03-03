let addItem = (user_task) => {
    const p_itm = document.createElement("p");
    const p_txt = document.createTextNode(user_task);
    p_itm.appendChild(p_txt);
    document.getElementById("todoList").appendChild(p_itm);
};
let getTask = () => {
    let user_task = prompt("Input task: ");
    if (user_task != null) {
        addItem(user_task);
    }
};
//# sourceMappingURL=index.js.map