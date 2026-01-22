import { Values } from "./Values";

export class Calculator {
  public calculate(values: Values): number {
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

  private add(a: number, b: number): number {
    return a + b;
  }

  private subtract(a: number, b: number): number {
    return a - b;
  }

  private multiply(a: number, b: number): number {
    return a * b;
  }

  private divide(a: number, b: number): number {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }
}
