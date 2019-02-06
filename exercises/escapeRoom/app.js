var ask = require('readline-sync');

var name = ask.question('What is your name eartlhing?');
console.log('Hello, ' + name + ':)');

var gameOver = false

var options = ['Put hand in hole', 'Find the Key', 'Open the Door'];
var deadOption = ["Heck ya!", "Nah"]
// My games
while(!gameOver){
    var userChoice = ask.keyInSelect(options, 'What are you going to do?');
    if(userChoice === 0){
        console.log('You put your hand in the hole, and an alien abducted you.')
        var userForce = ask.keyInSelect(deadOption, "Would you like to continue?")
        if(userForce === 0){
            gameOver = false
        } else if(userForce === 1 || userForce === -1){
            gameOver = true
        }   
    } else if(userChoice === 1) {
        console.log('You found the key!!! Wahoo')
        gameOver = false
    } else if (userChoice === 2){
        var userForce = ask.keyInSelect(deadOption, "Did you find the key?")
        if(userForce === 0){
            console.log('Congrats, you escaped the evil aliens from planet mean! Remember to be nice!')
            gameOver = true 
        } else if(userForce === 1 || userForce === -1){
            gameOver = false
        }   
        
    } else if (userChoice === -1){
        console.log('You cannot just cancel your problems, please choose an option.')
        gameOver = false
    } else {
        break;
    }
}
