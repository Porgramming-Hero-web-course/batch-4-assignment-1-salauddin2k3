
function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
};

const result = sumArray([1, 2, 3, 4, 5, 6, 7]);

// console.log(result);