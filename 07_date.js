const myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toLocaleString());
//console.log(myDate.toISOString());

let bornDate = new Date(2004, 5, 2)
console.log(bornDate.toDateString());

let bornDate2 = new Date("2004-08-26")
console.log(bornDate2.toLocaleString());


let myCreatedDate = new Date("01-10-2024")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

