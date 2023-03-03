function getTask(): void {
    let user_task: string = prompt("Input task: ");

    addItem(user_task);
}

function addItem(user_task: string): void {
    const p_itm: Element = document.createElement("p");
    const p_txt: Node = document.createTextNode(user_task);

    p_itm.appendChild(p_txt);
    document.getElementById("todoList").appendChild(p_itm);
}