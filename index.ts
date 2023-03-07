// TODO 
/*
1. Get user input for task ---DONE---
2. Make a function to put user input in task list with a certain class name, id name ---DONE---
3. See if user input is blank, if not add to list ---DONE---
4. Make a function to remove a certain task
5. When task is clicked call remove function for that task
6. then figure out how to store it in the browser (most likely with a server of some sort)
*/

const getTask = () : string => {
    const user_input: string = prompt("Input task");

    return user_input;
};

const addTask = (input: string) : void => {
    if (input !== "") {
        const task_btn: Element = document.createElement("button");
        const task_txt: Node = document.createTextNode(input);

        task_btn.setAttribute("class", "task-btn");
        task_btn.setAttribute("id", input);
        task_btn.appendChild(task_txt);

        document.getElementById("task-list").appendChild(task_btn);
    }
};

const removeTask = () : void => {
    // TODO
    /*
    1. Get button id
    */
}