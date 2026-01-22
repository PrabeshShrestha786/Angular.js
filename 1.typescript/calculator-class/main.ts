import { Values } from "./Values";
import { Calculator } from "./Calculator";
import * as readline from "readline";

class Main {
  public static run(): void {
    const args: string[] = process.argv.slice(2);

    // Option A: run with arguments -> node dist/main.js 10 + 5
    if (args.length === 3) {
      const values: Values = Main.parseArgs(args);
      Main.execute(values);
      return;
    }

    // Option B: interactive mode
    Main.runInteractive();
  }

  private static parseArgs(args: string[]): Values {
    const num1: number = Number(args[0]);
    const operator: string = args[1];
    const num2: number = Number(args[2]);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      throw new Error("Invalid numbers. Example: node dist/main.js 10 + 5");
    }

    return new Values(num1, num2, operator);
  }

  private static execute(values: Values): void {
    const calculator: Calculator = new Calculator();

    try {
      const result: number = calculator.calculate(values);
      console.log(`${values.num1} ${values.operator} ${values.num2} = ${result}`);
    } catch (err: unknown) {
      const message: string =
        err instanceof Error ? err.message : "Unknown error occurred";
      console.log(`Error: ${message}`);
    }
  }

  private static runInteractive(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("Enter first number: ", (a: string) => {
      rl.question("Enter operator (+, -, *, /): ", (op: string) => {
        rl.question("Enter second number: ", (b: string) => {
          rl.close();

          const num1: number = Number(a);
          const num2: number = Number(b);

          if (Number.isNaN(num1) || Number.isNaN(num2)) {
            console.log("Error: Please enter valid numbers.");
            return;
          }

          const values: Values = new Values(num1, num2, op.trim());
          Main.execute(values);
        });
      });
    });
  }
}

Main.run();
