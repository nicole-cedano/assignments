var ask = require('readline-sync')
// INTRO
var name = ask.question('Hello! Welcome to the WORST mistake of your life. What is your name? ')

console.log('Enter ' + name)

var player = {
    name: name,
    health: 100,
    inventory: []
}
// Start game
var options = ["You must walk, press W "];

    while(player.health > 10) {
        var choice = ask.keyIn(options, {limit: 'w'})
        if (choice === 'w'){
            console.log("Strolling down the path to either the best or worst thing of your life :) ")
            break
        } else {
            console.log ("You dont have a choice. Walk.")
        }
    }

    // ATTACK....... !!!!!
    function randomEnemy (){
        var enemies = [
            {
                enemyName: "Dr. Doofenshmirtz",
                enemyHealth: 400,
                enemyLocation: "Coming from the sky"
            },
            {
                enemyName: 'The Joker',
                enemyHealth: 300,
                enemyLocation: "Smiling in front of your face,"
            },
            {
                enemyName: 'La llorona',
                enemyHealth: 200,
                enemyLocation: "In your room at night"
            }]
            
            var enemy = Math.floor(Math.random() * enemies.length)
            if (enemy === 0) {
                return enemies[0]
            } else if (enemy === 1) {
                return enemies[1]
            } else {
                return enemies[2]
        }
    }
    var currentEnemy = randomEnemy()

    function random() {
   
        var beingAttacked = Math.floor(Math.random() * 4)
        if (beingAttacked === 0 || beingAttacked === 1) {
            console.log("Sadly, " + name + " an enemy has appeared it is " + currentEnemy.enemyName + " with " + currentEnemy.enemyHealth +
                " health power, and is located " + currentEnemy.enemyLocation)
            return runAndAttack(player.health)

        } else {
            console.log("No enemy appeared, yet.")
            return runAndAttack(player.health)
        }
    } console.log(random())

//4. Choose to be brave or run like a scaredy pants

function runAndAttack(health) {
    while (health > 60) {
        
        var runAttack = ["run", "attack"]
        var defense = ask.keyInSelect(runAttack, "Choose how to resist,")
        if (defense === 0) {
            console.log("RUN, never a bad option.")
            var power = ["lowest", "highest"]
            var runPower = ask.keyInSelect(power, "Choose RUN power")
            if (runPower === 0) {
                console.log("You are running with the weakest power")
                return enemyAttack()
            } else {
                console.log("You ran, with the HIGHEST power wahooo")
                return enemyAttack()
            }
        } else if (defense === 1) {
            console.log("the resistance!!!! Woop em.")
            var attackPower = ["minimum", "maximum"]
            var power = ask.keyInSelect(attackPower, "Choose your attack.")
            if (power === 0) {
                console.log("You're attacking with a plastic spoon.")
                return enemyAttack()
            } else {
                console.log("Somehow you've turned into the most powerful living thing in the universe, cheers.")
                return enemyAttack()
            }
        } else {
            console.log("You can not, not do something. Not today.")
        }
    }
}
// Enemy fights BACK
function enemyAttack() {
    console.log("Ur biggest fear, they aren't done. That pyscho is attacking you again.")
    var damage = Math.floor(Math.random() * 2)
    if (damage === 1) {
        player.health -= 33
        console.log("POP POP gotcha!" + player.health + " health :( boohoo");
        return walkAgain();
          } else {
        
        player.health += 33
        player.inventory.push(currentEnemy.enemyName)
        console.log("Woot, woot ;) you have" + currentEnemy.enemyName + " in your inventory. Health: " + player.health);
        return walkAgain();
    }}
// ending 
    function walkAgain() {
        if(player.health < 60){
            return "Sudden Death. Game Over."
            
        } else if( player.health > 160){
            return "YOU KILLED them. One last WOOT WOOT, cheers, and now this has turned into a fun drinking game, take a shot!!!"
        }
        else {
        var options2 = ["Enter 'w' if you would like stroll again, or 'print' if you would like to know you stats."]
        var choice = ask.keyIn(options2, {limit:"wp"})
        if (choice == "w") {
            console.log("ANOTHER STROLL teehee")
            //console.log(player.health);
            return random()
        } else if(choice == "p") {
            console.log(player)
            return random()
        }
        else {
            console.log("Honestly, i told you once, not today. Press the mf w on ur keyboard now.")
            return random()
        }
}}


console.log(Person.name)
