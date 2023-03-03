function getTask() {
    var user_task = prompt("Input task: ");
    addItem(user_task);
}
function addItem(user_task) {
    var p_itm = document.createElement("p");
    var p_txt = document.createTextNode(user_task);
    p_itm.appendChild(p_txt);
    document.getElementById("todoList").appendChild(p_itm);
}
//# sourceMappingURL=index.js.map