
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

function mySlice (str){
    console.log(str.slice(0, cutHalf))
}
mySlice()
