const readlineSync = require("readline-sync");

// Store all tasks in an array
let tasks = [];

// -----------------------------------------------------------------------------
// FEATURE 1 — Add a Task
// -----------------------------------------------------------------------------

function addTask() {
    const task = readlineSync.question("Enter task: ");

    if (task.trim() === "") {
        console.log("Error: Task cannot be empty.");
        return;
    }

    tasks.push(task);

    console.log(`Task added: "${task}"`);
}

// -----------------------------------------------------------------------------
// FEATURE 2 — View All Tasks
// -----------------------------------------------------------------------------

function viewTasks() {
    if (tasks.length === 0) {
        console.log("Your to-do list is empty.");
        return;
    }

    console.log("\nYour Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

// -----------------------------------------------------------------------------
// FEATURE 3 — Delete a Task
// -----------------------------------------------------------------------------

function deleteTask() {
    if (tasks.length === 0) {
        console.log("There are no tasks to delete.");
        return;
    }

    // Display the tasks first
    viewTasks();

    const taskNumber = readlineSync.questionInt(
        "Enter task number to delete: "
    );

    // Check whether the task number is valid
    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    // Convert task number to array index
    const index = taskNumber - 1;

    const deletedTask = tasks[index];

    // Remove one task from the array
    tasks.splice(index, 1);

    console.log(`Task "${deletedTask}" has been removed.`);
}

// -----------------------------------------------------------------------------
// FEATURE 4 — Quit
// -----------------------------------------------------------------------------

function quit() {
    console.log("Goodbye!");
}

// -----------------------------------------------------------------------------
// DISPLAY MENU
// -----------------------------------------------------------------------------

function displayMenu() {
    console.log("\n============================");
    console.log("     TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

// -----------------------------------------------------------------------------
// MAIN FUNCTION
// -----------------------------------------------------------------------------

function main() {

    let running = true;

    while (running) {

        displayMenu();

        const choice = readlineSync.questionInt(
            "Enter your choice (1-4): "
        );

        switch (choice) {

            case 1:
                addTask();
                break;

            case 2:
                viewTasks();
                break;

            case 3:
                deleteTask();
                break;

            case 4:
                quit();
                running = false;
                break;

            default:
                console.log(
                    "Error: Invalid choice. Please enter a number from 1 to 4."
                );
        }
    }
}

// Start the program
main();