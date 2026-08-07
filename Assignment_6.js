const readlineSync = require("readline-sync");

// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------

function printSingleTable(number) {
    console.log(`Multiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number}  x  ${i}  =  ${number * i}`);
    }
}

// -----------------------------------------------------------------------------
// PART B — Tables from 1 to N
// -----------------------------------------------------------------------------

function printTablesFromOneToN(n) {
    for (let number = 1; number <= n; number++) {

        console.log(`Multiplication Table for ${number}:`);

        for (let i = 1; i <= 12; i++) {
            console.log(`${number}  x  ${i}  =  ${number * i}`);
        }

        // Separator between tables
        if (number < n) {
            console.log("---------------------------");
        }
    }
}

// -----------------------------------------------------------------------------
// MAIN FUNCTION
// -----------------------------------------------------------------------------

function main() {

    // =========================================================================
    // PART A — Single Table
    // =========================================================================

    const number = readlineSync.questionInt(
        "Enter a number for the multiplication table: "
    );

    if (number <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    printSingleTable(number);


    // PART B — Tables from 1 to N
    // =========================================================================

    const n = readlineSync.questionInt(
        "\nEnter N to generate tables from 1 to N: "
    );

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    console.log();

    printTablesFromOneToN(n);
}

main();