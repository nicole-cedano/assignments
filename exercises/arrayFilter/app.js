//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// function fiveAndGreaterOnly(arr) {
//     var fiveGreater = arr.filter(function(num){
//         if(num >= 5) 
//         return num
// }) 
//     return fiveGreater
// }
// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// Given an array of numbers, return a new array that only includes the even numbers.
// function evensOnly(arr) {
//     var evenNumbers = arr.filter(function(num){
//         if(num % 2 === 0)
//         return num
//     })
//     return evenNumbers
// }
// // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// function fiveCharactersOrFewerOnly(arr) {
//     var lessThanFive = arr.filter(function(str){
//         if (str.length <= 5)
//         return str
//     })
//     return lessThanFive
// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// function peopleWhoBelongToTheIlluminati(arr){
//     var illuminatiPeople = arr.filter(function(person){
//         if (!person.member)
//         return person
//     })
//     return illuminatiPeople
// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ]));
//Filter out all the people who are not old enough to see The Matrix (younger than 18)
// function ofAge(arr){
//     var notOldEnough = arr.filter(function(person){
//         if(person.age < 18)
//         return person
//     })
//     return notOldEnough
// }
// // test
// console.log(ofAge([
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
