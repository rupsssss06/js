const accountId=144553
let accoutEmail= "rupa@google.com"
var accountPass= "12345"
accountCity="Jaipur"

//accountId=2 //not allowed

accoutEmail="rj@google.com"
accountPass="234566788"
accountCity="Bengaluru"
console.log(accountId);

let accountState // it holds undefined value
/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accoutEmail, accountPass, accountCity, accountState])

