// Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
//     var twiceNumber = arr.map(function(num){
//         return (num * 2)
//     })
//     return twiceNumber
// } 

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


// Take an array of numbers and make them strings
// function stringItUp(arr){
//     var makeString = arr.map(function(num){
//         return String(num)
//     })
//     return makeString
  
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// Capitalize each of an array of names
// function capitalizeNames(arr){
//     var upperCase = arr.map(function(str){
//         return str.toUpperCase()
//     })
//     return upperCase
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // 

//Make an array of strings of the names
// function namesOnly(arr){
//     var stringNames = arr.map(function(person){
//         return person.name
//     })
//     return stringNames
// }  

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//     var goToMatrix = arr.map(function(person){
//         if (person.age < 18){
//             return person.name + " is underage!"
//         } else {
//             return  person.name + " can go to the Matrix."
//         }
//     })
//     return goToMatrix
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// Make an array of the names in h1s, and the ages in h2s
// function readyToPutInTheDOM(arr){
//   var hNamesAndAge = arr.map(function(person){
//       return '<h1>'+person.name+'</h1>'+'<h2>'+ person.age+'</h2>'
//   })
//   return hNamesAndAge
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]