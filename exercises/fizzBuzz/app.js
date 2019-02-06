var fizzArray = []
function fizzBuzz(){
    for(i=0;i <= 100; i++){
        fizzArray.push(i)
    } if(i % 3 === 0){
        i = "fizz"
    }
    return fizzArray
}
console.log(fizzBuzz())
