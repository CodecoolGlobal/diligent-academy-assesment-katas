/* 
Create a TypeScript function that takes two arrays as parameters 
and determines whether the two arrays contain the same elements in any order. 
The elements must be of the same type and can occur multiple times in the arrays. 
*/

function compareArrays/* generic type */(/* parameters */): /* return type */ {

}

// Tests

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];
const arr3 = [1, 2, 3, 4];
const arr4 = [1, 2, 3, 2];
const arr5 = [1, 2, 3, 4, 5];

console.log(compareArrays(arr1, arr2)); // true
console.log(compareArrays(arr1, arr3)); // false
console.log(compareArrays(arr1, arr4)); // false
console.log(compareArrays(arr1, arr5)); // false

const arr6 = [1, 2, 3, 1];
const arr7 = [1, 2, 3];

console.log(compareArrays(arr6, arr7)); // true

const arr8 = ["hello", "world"];
const arr9 = ["world", "hello"];

console.log(compareArrays(arr8, arr9)); // true

const arr10 = ["hello", "world", "hello"];
const arr11 = ["world", "hello"];

console.log(compareArrays(arr10, arr11)); // false