// singleton 
//  Object.create 

// object literals

const mySym = Symbol("kay1")

const JsUser = {
    name:"manoj",
    "full name": "surname manoj",
    [mySym]: "mykey1",
    age: 77,
    location: "india",
    email: "manoj@gooogle.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( JsUser[mySym])
// myArray = ['h', 'i']
// console.log(myArray[1])

JsUser.email = "monkey@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "monkey@google.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("hello user")
}
JsUser.greeting2 = function(){
    console.log(`hey js user, ${this.email}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())