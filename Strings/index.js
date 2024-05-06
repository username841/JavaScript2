// REVERSING A STRING

function reverseString(str) {
    return str.split('').reverse().join('');
}


// See Examples below

console.log(reverseString('praise')); // Output is this 'esiarp'
console.log(reverseString('56789')); // Output is this '98765'

// COUNTING CHARATERS IN A STRING

function countCharacters(str) {
     return str.length;   // the length property is being used here
}

// See Examples below
console.log(countCharacters('Ebenezer')); // Output: 8
console.log(countCharacters('Be glorified Emmannual thank You LORD')); // Output: 32


// CAPITALIZING WORDS

function capitalizeWords(sentence) {
    // Splittng sentence into an array of words
    const words = sentence.split(' ');
    
    // Capitalizing the first letter of each word and joining them back into a sentence
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    
    // Joining the capitalized words into a sentence
    return capitalizedWords.join(' ');
}
            // Example 
console.log(capitalizeWords('praise god')); // Output: 'Praise God'
console.log(capitalizeWords('the grace is here again')); // Output: 'The Grace Is Here Again'