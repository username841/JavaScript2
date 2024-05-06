// Array Functions

// Find Maximum and Minimum

// Maximunm

function findMaximum(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    let max = arr[0]; // Initialize max to the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }
    return max;
}

// Minimum

function findMinimum(arr) {
    if (arr.length === 0) {
        return undefined; // Return if  empty
    }
    let min = arr[0]; // Initialize min to the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if current element is smaller
        }
    }
    return min;
}
//   example of using findMaximum and findMinimum:

const numbers = [5, 3, 9, 1, 7];

console.log(findMaximum(numbers)); // Output: 9
console.log(findMinimum(numbers)); // Output: 1


// Sum of Array:
function sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum;
}
// Example

const num = [1, 2, 3, 4, 5];

console.log(sumArray(numbers)); // Output: 15

// Filter Array:

function filterArray(arr, condition) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
//  example

const n = [1, 2, 3, 4, 5];

const filteredNumbers = filterArray(numbers, num => num % 2 !== 0);
console.log(filteredNumbers); // Output: [1, 3, 5]