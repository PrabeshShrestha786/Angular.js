"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcArray(numbers) {
    var sum = 0;
    var count = numbers.length;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return {
        sum: sum,
        count: count
    };
}
// Test usage
var arrayNumbers = [1, 5, 5, 5, 6];
var test = calcArray(arrayNumbers);
console.log("Sum: ".concat(test.sum, " & count: ").concat(test.count));
