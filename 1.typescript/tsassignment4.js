"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function castValue(value) {
    if (typeof value === "string") {
        var stringValue = value;
        return stringValue;
    }
    if (typeof value === "number") {
        var numberValue = value;
        return numberValue;
    }
    return "Sorry, this is an unsupported type";
}
// Test cases
console.log(castValue("Word"));
console.log(castValue(525));
console.log(castValue(false));
