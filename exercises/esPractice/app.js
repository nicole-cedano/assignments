// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// const collectAnimals = (...animals) => animals

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]
// Write a function that returns a food object with the array names as properties using Object Literals:

// const combineFruit = (fruit, sweets, vegetables) => {
//     return {
//         fruit,
//         sweets,
//         vegetables
//     }
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))


// // Use destructuring to fill in the blanks and use the property names as variables:

// const vacation = {  
//   location: "Burly Idaho",
//   duration: "2 weeks"
// };
// const { location , duration} = vacation
// const parseSentence = () => `We're going to have a good time in ${location} for ${duration}`
// console.log(parseSentence(vacation))

// Use destructuring to make this code ES6:
// const returnFirst = (items) =>{
//     const [firstItem] = items /*change this line to be es6*/
//     return firstItem
// }
// console.log(returnFirst(["fd", "fglkfj"]))

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// const[firstFav, secondFav, thirdFav] = favoriteActivities
// const returnFavorites = (arr) => `My top three favorite activities are, ${firstFav}, ${secondFav} , and ${thirdFav}`
// console.log(returnFavorites())



// Use the Rest and Spread Operator to help take any number of arrays, and return one array.
// //  You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// const combineAnimals = (arr, arr1, arr2) => [...arr,...arr1,...arr2]


// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)) 


// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// Try to make the following function more ES6xy:

// const product = (...numbers) => numbers => numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// Make the following function more ES6xy. 

const product = (...numbers) => numbers =>  numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  
  console.log(product(1,2,3,4,5))

  