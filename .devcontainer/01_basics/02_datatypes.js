"use strict";  // treat all js code as newer version

// alert("hitesh")  we are using Node.js not brower

console.log(3+3)

// number => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// string => "hitesh", "javascript", "react", "angular"
// boolean => true, false
// undefined => variable which is declared but not assigned any value
// null => variable which is declared and assigned with null value


// object => array, object literal, function, date, regex
// bigint => 1234567890123456789012345678901234567890n
// symbol => Symbol("hitesh"), unique and immutable value

console.log(typeof "himanshu") // string
console.log(typeof 123) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object (this is a bug in javascript, it should be null)
console.log(typeof [1, 2, 3]) // object (array is a type of object)
console.log(typeof {name: "hitesh", age: 30}) // object (object literal)
console.log(typeof function() {}) // function (function is a type of object)