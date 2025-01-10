// ways to define strings
let str1 = "hello world";
let str2 = new String('the quick brown fox jumps')

console.log(str2);
console.log(str2[1]);


/* 
const name = "diwakar";
const age =21;
console.log(name+age);
*/

// through string interpolation
const name = "diwakar";
const age =21;
console.log(`${name} is ${age} years old.`);

// multiline strings
let multiString = `this is a multiline strings 
using template literals`;


// some string properties
let org = "EduGlint";
console.log(org.length);
console.log(org.toUpperCase());
console.log(org.startsWith('E'));
console.log(org.search('G'));
console.log(org.lastIndexOf('G'));




