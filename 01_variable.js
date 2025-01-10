const accountId = 14453
let accountEmail = "jaiswaldiwakar91@gmail.com"
var accountPassword = "12345"
accountCity = "patna"


// accountId =23  // not allowed


/*
prefer not to use var because of issue
 in block scope and functional scope
 */


console.log(accountId);

accountEmail = "hiby5900@gmail.com"
accountPassword = "5900"

console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity])


