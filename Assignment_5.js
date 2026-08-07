const readlineSync = require("readline-sync");

// PART A — Print the First N Terms

function printFibonacciTerms(n) {
    let first = 0;
    let second = 1;

    let sequence = "";

    for (let i = 0; i < n; i++) {
        sequence += first + " ";

        let next = first + second;
        first = second;
        second = next;
    }

    console.log("Fibonacci sequence:", sequence.trim());
}

// PART B — Check if a Number Belongs to the Fibonacci Sequence

function isFibonacciNumber(number) {
    let first = 0;
    let second = 1;

    // Fibonacci numbers cannot be negative
    if (number < 0) {
        return false;
    }

    // Generate Fibonacci numbers until we reach or pass the given numbers
    while (first <= number) {
        if (first === number) {
            return true;
        }

        let next = first + second;
        first = second;
        second = next;
    }

    return false;
}

// MAIN FUNCTION

function main() {

    // PART A

    const n = readlineSync.questionInt("How many terms? ");

    // Check that N is positive
    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    printFibonacciTerms(n);


    // PART B

    const number = readlineSync.questionInt(
        "Enter a number to check: "
    );

    if (isFibonacciNumber(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}


main();