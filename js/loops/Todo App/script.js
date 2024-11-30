let todo = [];

while (true) {
    let req = prompt("Please Enter the request");

    if (req === "quit") {
        console.log("quitting app");
        break;
    }

    if (req === "list") {
        console.log("-------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-------------------");
    } else if (req === "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else if (req === "delete") {
        let idx = parseInt(prompt("Please enter the task index"));
        if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("task deleted");
        } else {
            console.log("Invalid index");
        }
    }
}
