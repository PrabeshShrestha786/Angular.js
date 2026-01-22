export {};

function castValue(value: unknown): string | number {
    if (typeof value === "string") {
        let stringValue: string = value as string;
        return stringValue;
    }

    if (typeof value === "number") {
        let numberValue: number = value as number;
        return numberValue;
    }

    return "Sorry, this is an unsupported type";
}

// Test cases
console.log(castValue("Word"));
console.log(castValue(525));
console.log(castValue(false));
