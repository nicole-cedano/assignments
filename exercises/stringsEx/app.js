
var str = "Hello World"
function lowerUpper(str){
    console.log(str.toUpperCase() + str)
}
lowerUpper("Hello World")


var str = ""
function cutHalf(str) {
    console.log(Math.floor((str.length) / 2))
}
cutHalf("Hello World")

// function mySlice (str){
//     console.log(str.slice(0, cutHalf))
// }
// mySlice()

function capitalizeAndLowerCase(str){
    var middle = Math.floor(str.length / 2 )
    var str1 = str.slice(0, middle).toUpperCase()
    var str2 = str.slice(middle).toLowerCase()
    return str1 + str2
}
console.log(capitalizeAndLowerCase("Hello World"))

