const myArr= [1,2,3,4,5]
//console.log(myArr[3])

const myHero= ['Ironman','Batman','Spiderman','Antman']
//console.log(myHero.slice(0,2))

//Array methods

// myArr.push(6) //adds element at the end of the array
// console.log(myArr)

// myArr.pop() //removes the last element of the array
// console.log(myArr)

// myArr.push(6)
// console.log(myArr)

myArr.unshift(7) //adds element at the beginning of the array
// console.log(myArr)

myArr.shift(7) //removes the first element of the array
// console.log(myArr)

// console.log(myArr.includes(3)) //returns true if the element
// console.log(myArr.includes(9)) //wise returns false

// console.log(myArr.indexOf(9)) //returns -1 if the element is not found
// console.log(myArr.indexOf(3)) //returns the index of the element if found

// const newArr= myArr.join()
// console.log(newArr) //returns a string of the array elements separated by commas
// console.log(typeof newArr)
// console.log(myArr)
// const newArr2= myArr.join(' - ')
// console.log(newArr2) //returns a string of the array elements separated by ' - '

// const newArr3= newArr2.split(' - ')
// console.log(newArr3) //returns an array of the string elements separated by ' - '    
// console.log(myArr)

//Slice and Splice

// console.log("A", myArr)
// const newArr4= myArr.slice(1,3)
// console.log(newArr4) //returns a new array with the elements

// console.log("B", myArr)
// const newArr5= myArr.splice(1,3)
// console.log(newArr5)

const marvel_heroes= ["Ironman", "Thor","Captain_America","Spiderman"]
const dc_heroes= ["Batman","Flash","Superman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[4][0])

// const allHeroes= marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

// const all_new_heroes= [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes)

const new_array= [1,2,3, [4,5,6],7, [6,7,  [4,5]]]
const real_new_array= new_array.flat(Infinity)
console.log(real_new_array)

console.log(Array.isArray("Manoj"))
console.log(Array.from("Manoj"))
console.log(Array.from({name: "Manoj"}))

let score1=500;
let score2= 600;
let score3= 700;
console.log(Array.of(score1,score2, score3)); //we can use of or from both