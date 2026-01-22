export {};

function printInfo(name: string, occupation: string, wage: number): string {
  return `Hey, ${name}. You are an ${occupation} and your hourly wage is ${wage} euros.`;
}

console.log(printInfo("Prabesh", "Engineer", 25));
