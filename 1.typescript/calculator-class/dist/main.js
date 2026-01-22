"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Values_1 = require("./Values");
const Calculator_1 = require("./Calculator");
const readline = require("readline");
class Main {
    static run() {
        const args = process.argv.slice(2);
        // Option A: run with arguments -> node dist/main.js 10 + 5
        if (args.length === 3) {
            const values = Main.parseArgs(args);
            Main.execute(values);
            return;
        }
        // Option B: interactive mode
        Main.runInteractive();
    }
    static parseArgs(args) {
        const num1 = Number(args[0]);
        const operator = args[1];
        const num2 = Number(args[2]);
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            throw new Error("Invalid numbers. Example: node dist/main.js 10 + 5");
        }
        return new Values_1.Values(num1, num2, operator);
    }
    static execute(values) {
        const calculator = new Calculator_1.Calculator();
        try {
            const result = calculator.calculate(values);
            console.log(`${values.num1} ${values.operator} ${values.num2} = ${result}`);
        }
        catch (err) {
            const message = err instanceof Error ? err.message : "Unknown error occurred";
            console.log(`Error: ${message}`);
        }
    }
    static runInteractive() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter first number: ", (a) => {
            rl.question("Enter operator (+, -, *, /): ", (op) => {
                rl.question("Enter second number: ", (b) => {
                    rl.close();
                    const num1 = Number(a);
                    const num2 = Number(b);
                    if (Number.isNaN(num1) || Number.isNaN(num2)) {
                        console.log("Error: Please enter valid numbers.");
                        return;
                    }
                    const values = new Values_1.Values(num1, num2, op.trim());
                    Main.execute(values);
                });
            });
        });
    }
}
Main.run();
