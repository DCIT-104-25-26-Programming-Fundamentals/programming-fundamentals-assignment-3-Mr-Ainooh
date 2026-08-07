const readlineSync = require("readline-sync");

function add(a, b) {
    return a + b;
}

// -----------------------------------------------------------------------------
// OPERATION 2 — Subtraction
// -----------------------------------------------------------------------------

function subtract(a, b) {
    return a - b;
}

// -----------------------------------------------------------------------------
// OPERATION 3 — Multiplication
// -----------------------------------------------------------------------------

function multiply(a, b) {
    return a * b;
}

// -----------------------------------------------------------------------------
// OPERATION 4 — Division
// -----------------------------------------------------------------------------

function divide(a, b) {
    if (b === 0) {
        return null;
    }

    return a / b;
}

// -----------------------------------------------------------------------------
// OPERATION 5 — Modulus
// -----------------------------------------------------------------------------

function modulus(a, b) {
    if (b === 0) {
        return null;
    }

    return a % b;
}

// -----------------------------------------------------------------------------
// OPERATION 6 — Exponentiation
// -----------------------------------------------------------------------------

function exponentiate(a, b) {
    return a ** b;
}

// -----------------------------------------------------------------------------
// DISPLAY MENU
// -----------------------------------------------------------------------------

function displayMenu() {
    console.log("\n============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

// -----------------------------------------------------------------------------
// MAIN FUNCTION
// -----------------------------------------------------------------------------

function main() {

    let running = true;

    while (running) {

        displayMenu();

        const choice = readlineSync.questionInt(
            "Select an operation (1-7): "
        );

        // Quit
        if (choice === 7) {
            console.log("Goodbye!");
            running = false;
            continue;
        }

        // Check for invalid menu choices
        if (choice < 1 || choice > 7) {
            console.log(
                "Error: Invalid choice. Please select a number from 1 to 7."
            );
            continue;
        }

        // Get the two numbers
        const firstNumber = readlineSync.questionFloat(
            "Enter first number : "
        );

        const secondNumber = readlineSync.questionFloat(
            "Enter second number: "
        );

        let result;
        let operator;

        switch (choice) {

            case 1:
                result = add(firstNumber, secondNumber);
                operator = "+";
                break;

            case 2:
                result = subtract(firstNumber, secondNumber);
                operator = "-";
                break;

            case 3:
                result = multiply(firstNumber, secondNumber);
                operator = "*";
                break;

            case 4:
                result = divide(firstNumber, secondNumber);
                operator = "/";
                break;

            case 5:
                result = modulus(firstNumber, secondNumber);
                operator = "%";
                break;

            case 6:
                result = exponentiate(firstNumber, secondNumber);
                operator = "**";
                break;
        }

        // Handle division or modulus by zero
        if (result === null) {
            console.log("Error: Cannot divide by zero.");
        } else {
            console.log(
                `Result: ${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`
            );
        }
    }
}


main();