// Mathematical Functions:

// Factorial

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Factorial of 0 and 1 is 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiply result by each number from 2 to n
    }
    return result;
}
 
const result = factorial(6);
console.log(result); // Output: 720



// Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number from 2 to sqrt(num), it's not prime
        }
    }
    return true; // Otherwise, num is prime
}

console.log(isPrime(7)); // Output: true

// Fibonacci Sequence:

function fibonacciSequence(n) {
    const sequence = [0, 1]; // Initializing the sequence with the first two Fibonacci numbers
    for (let i = 2; i < n; i++) {
        const nextFibonacci = sequence[i - 1] + sequence[i - 2]; // Calculating the next Fibonacci number
        sequence.push(nextFibonacci); // Add the next Fibonacci number to the sequence
    }
    return sequence;
}


// The working
const fibonacciSequenceUpTo15 = fibonacciSequence(15);
console.log(fibonacciSequenceUpTo15); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]