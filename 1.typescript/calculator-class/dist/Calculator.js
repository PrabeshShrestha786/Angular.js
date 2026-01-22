"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    calculate(values) {
        const { num1, num2, operator } = values;
        switch (operator) {
            case "+":
                return this.add(num1, num2);
            case "-":
                return this.subtract(num1, num2);
            case "*":
                return this.multiply(num1, num2);
            case "/":
                return this.divide(num1, num2);
            default:
                throw new Error("Unsupported operator. Use +, -, *, /");
        }
    }
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0)
            throw new Error("Cannot divide by zero");
        return a / b;
    }
}
exports.Calculator = Calculator;
