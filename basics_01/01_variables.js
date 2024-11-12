const accountId = 144553
let accountEmail = "abcd@gmail.com"
var accountPassword = "12345"
accountCity = "Surat"
let accountState

// accountId=2     /not allowed

accountEmail = "bt@bt.com"
accountPassword = "258441654"
accountCity = "mumbai"

console.log(accountId);


/*
Prefer not to use var because of issue in blockscope and functional scope


*/



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
