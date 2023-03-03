const addItem = (user_task: string): void => {
    const p_itm: Element = document.createElement("button"); // create para element for remove
    const p_txt: Node = document.createTextNode(user_task); // add the text to para element

    p_itm.classList.add("user-task");
    p_itm.appendChild(p_txt); // append txt to para
    
    document.getElementById("todoList").appendChild(p_itm); // add to todoList div
}

const getTask = (): void => {
    let user_task: string = prompt("Input task: "); // ask user for task (duh)

    if (user_task != "") { // if they don't put anything dont pull null basically
        addItem(user_task);
    }
}