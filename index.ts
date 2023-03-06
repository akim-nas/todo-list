class TaskList {
    constructor() {
        // pass
    }

    addItem = (user_task: string): void => {
        const p_itm: Element = document.createElement("button"); // create para element for remove
        const p_txt: Node = document.createTextNode(user_task); // add the text to para element

        p_itm.classList.add("user-task");
        p_itm.appendChild(p_txt); // append txt to para
        
        document.getElementById("todoList").appendChild(p_itm); // add to todoList div
    }

    /* isInList = (taskList: any, userTask: string): boolean => {
        let is_in_list: boolean = false;

        for (let i: number = 0; i <= taskList.length(); i++) {
            if (userTask == taskList[i]) {
                is_in_list = true;
            }
        }

        return is_in_list;
    } */

    getTask = (): void => {
        let task_list: Node = document.getElementById("taskList");
        let user_task: string = prompt("Input task: "); // ask user for task (duh)

        if (user_task !== "" /* && !isInList(task_list, user_task) */) { // if they don't put anything dont pull null basically
            this.addItem(user_task);
        }
    }

    removeTask = (): void => {
    }
}

let List: Object = new TaskList;