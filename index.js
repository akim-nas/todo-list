class TaskList {
    constructor() {
        this.addItem = (user_task) => {
            const p_itm = document.createElement("button");
            const p_txt = document.createTextNode(user_task);
            p_itm.classList.add("user-task");
            p_itm.appendChild(p_txt);
            document.getElementById("todoList").appendChild(p_itm);
        };
        this.getTask = () => {
            let task_list = document.getElementById("taskList");
            let user_task = prompt("Input task: ");
            if (user_task !== "") {
                this.addItem(user_task);
            }
        };
        this.removeTask = () => {
        };
    }
}
let List = new TaskList;
//# sourceMappingURL=index.js.map