// array declaration
const myArr1 = new Array(1,2,3,4)
console.log(myArr1);

const myArr2 = [10,1,2,3,4,5];
console.log(myArr2[0]);

const myHeros = ["batman","superman","spiderman","thor"];
console.log(myHeros.length);

// ARRAY METHODS 

myHeros.push("hulk");      //add element at last index
myHeros.push("wanda")
console.log(myHeros);

myHeros.pop();              // removes last index element
console.log(myHeros);

myHeros.unshift("vision");  // add vision at first index
console.log(myHeros);

myArr1.unshift(0)  // add element at first index
console.log(myArr1);

myHeros.shift();  // removes first element
console.log(myHeros);

console.log(myHeros.indexOf("thor")); // returns index of specific element

console.log(myHeros.includes("thanos")); // returns boolean value if it is found

const newArr = myArr1.join()  // joins arrays and converts into string

console.log(myArr1);
console.log(newArr);
console.log(typeof(newArr));



