// console.log(2>1);

// console.log("2">1);

console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // true  ⚠️ (unexpected!)

console.log(undefined == 0);   // false
console.log(undefined > 0);    // false
console.log(undefined < 0);    // false

console.log("2" == 2);    // true  (type conversion happens)
console.log("2" === 2);   // false (strict check, different datatypes)