//Readline Sync
var ask = require('readline-sync')


var name = ask.question("What is your name?")

console.log('Hello ' + name);
var gameOver = false

// var animals = ['Dog', 'Bird', 'cat', 'Lion']
// var favAnimal = readline.keyInSelect(animals, "what is your fav animal?")
// console.log( "Your fav animal is a " + animals[favAnimal])

//game loop

var options = [
    'Put Hand In Hole', 'Find Key', 'Open Door']


    while(!gameOver){
    var userChoice = ask.keyInSelect(options, 'What would you like to do?');
    if(userChoice === 0){
        console.log('You put your hand in the hole, and a bear ate you.')
    }


}
