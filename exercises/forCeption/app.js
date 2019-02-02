//Write a function that takes two arrays as parameters. The first array will be an array of 
//people's names, and the second array will be the alphabet. Using a for loop within a for loop

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){
    var newArr = []
    for ( i = 0 ; i < people.length; i++){
        newArr.push(people.splice(i,1) + ':')
        for (n = 0 ; n < alphabet.length; n++){
            newArr.push(alphabet[n])
        }
        // console.log(people)
        // newArr.push(people.splice(0,1)) 
    }
    console.log(newArr)
   
}
console.log(forception(people, alphabet))



