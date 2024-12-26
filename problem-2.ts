
function removeDuplicates(numbers: number[]): number[] {
    const seen = new Set<number>();
    return numbers.filter(num => {
        if (seen.has(num)) {
            return false;
        }
        seen.add(num);
        return true;
    });
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6, 6]);

// console.log(result);
