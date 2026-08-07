const readlineSync = require("readline-sync");

// Store all student records
let students = [];

// -----------------------------------------------------------------------------
// FEATURE 1 — Add a Student
// -----------------------------------------------------------------------------

function addStudent() {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");

    const numberOfScores = readlineSync.questionInt(
        "How many scores? "
    );

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        const score = readlineSync.questionFloat(
            `Enter score ${i + 1}: `
        );

        scores.push(score);
    }

    // Create the student object
    const student = {
        name: name,
        id: id,
        scores: scores
    };

    // Add the student object to the students array
    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

// -----------------------------------------------------------------------------
// FEATURE 2 — Display All Students
// -----------------------------------------------------------------------------

function displayAllStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\n================ STUDENT RECORDS ================");

    for (let i = 0; i < students.length; i++) {

        const student = students[i];

        const average = calculateAverage(student.scores);

        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        console.log(`Average: ${average.toFixed(2)}`);

        console.log("-----------------------------------------------");
    }
}

// -----------------------------------------------------------------------------
// FUNCTION — Calculate Average
// -----------------------------------------------------------------------------

function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

// -----------------------------------------------------------------------------
// FEATURE 3 — Calculate Average for a Specific Student
// -----------------------------------------------------------------------------

function calculateStudentAverage() {
    const id = readlineSync.questionInt("Enter student ID: ");

    let studentFound = false;

    for (let i = 0; i < students.length; i++) {

        if (students[i].id === id) {

            const average = calculateAverage(students[i].scores);

            console.log(
                `${students[i].name}'s average score: ${average.toFixed(2)}`
            );

            studentFound = true;
            break;
        }
    }

    if (!studentFound) {
        console.log(`Error: Student with ID ${id} was not found.`);
    }
}


// -----------------------------------------------------------------------------
// DISPLAY MENU
// -----------------------------------------------------------------------------

function displayMenu() {
    console.log("\n================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
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
                addStudent();
                break;

            case 2:
                displayAllStudents();
                break;

            case 3:
                calculateStudentAverage();
                break;

            case 4:
                console.log("Goodbye!");
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