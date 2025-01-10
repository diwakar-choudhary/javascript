// stack memory (stores primitive data types)
let age = 18;
let myAge = age;
myAge=21;

console.log(age);
console.log(myAge);


// heap memory (stores non-primitive data types)
let userOne = {
    email : "hitesh@gmail.com",
    upi: "hitesh@ybl"
}

let userTwo = userOne;
userTwo.email = "hiby5900@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);



