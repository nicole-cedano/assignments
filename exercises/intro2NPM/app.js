//Readline Sync
var readline = require('readline-sync')

// var name = readline.question("What is your name?")

// console.log('Hello ' + name)

var animals = ['Dog', 'Bird', 'cat', 'Lion']
var favAnimal = readline.keyInSelect(animals, "what is your fav animal?")
console.log( "Your fav animal is a " + animals[favAnimal])


