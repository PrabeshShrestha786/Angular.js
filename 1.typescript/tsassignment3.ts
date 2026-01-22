export {};

// Define return type
type ArrayValues = {
    sum: number;
    count: number;
};

function calcArray(numbers: number[]): ArrayValues {
    let sum: number = 0;
    let count: number = numbers.length;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return {
        sum,
        count
    };
}

// Test usage
const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test: ArrayValues = calcArray(arrayNumbers);

console.log(`Sum: ${test.sum} & count: ${test.count}`);
