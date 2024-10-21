/* 
Create a TypeScript function that determines whether two strings are anagrams of each other.
An anagram is two words that consist of the same letters, but in a different order. 
Ignore case differences and spaces. 
*/

function isAnagram/* generic type */(/* parameters */): /* return type */ {

}

// Tests

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("A man, a plan, a canal: Panama!", "Panama: a canal, a plan, a man, A")); // true
console.log(isAnagram("dormitory", "dirty room")); // true
console.log(isAnagram("anagram", "margana")); // false
console.log(isAnagram("cinema", "iceman")); // true
console.log(isAnagram("foo", "bar")); // false
console.log(isAnagram("", "")); // true
console.log(isAnagram("a", "aa")); // false
console.log(isAnagram("a ", "a")); // true