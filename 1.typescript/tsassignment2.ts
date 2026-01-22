export {};

function convertShoeSize(size: number): number {
    const offset: number = 33;
    return size + offset;
}

// Test
console.log(convertShoeSize(8));
