/*
Given an array, create a function that finds the most frequent element.
If multiple elements occur the same number of times, any of them can be returned.
*/

function mostFrequentElement/* generic type */(/* parameters */): /* return type */ {
    
}

// Tests

const numbers = [3, 5, 2, 5, 3, 4, 1, 5];
const strings = ['apple', 'banana', 'apple', 'orange', 'apple'];
const mixed = [1, 'hello', 2, 'world', 1];

console.log(mostFrequentElement(numbers)); // 5
console.log(mostFrequentElement(strings)); // apple
console.log(mostFrequentElement(mixed)); // 1

const emptyArray: number[] = [];
console.log(mostFrequentElement(emptyArray)); // undefined

const arrayWithMultipleMostFrequent: number[] = [1, 2, 3, 1, 2, 3, 4];
console.log(mostFrequentElement(arrayWithMultipleMostFrequent)); // 1 or 2 or 3