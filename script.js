function calcSumAndAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return { sum: 0, average: 0 };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    return { sum, average };
}

const numbers = [10, 20, 30, 40];
const { sum, average } = calcSumAndAverage(numbers);
console.log(`Sum: ${sum}, Average: ${average}`); // Output: Sum: 100, Average: 25

function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return [];
    }

    const uniqueArray = Array.from(new Set(array));
    return uniqueArray;
}

const strings = ["apple", "banana", "apple", "orange", "banana"];
const uniqueStrings = removeDuplicates(strings);
console.log(`Unique Strings: ${uniqueStrings}`); // Output: Unique Strings: apple,banana,orange
