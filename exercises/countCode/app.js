function countCode(string) {  
    var count = 0;
    for( var i = 0; i < string.length; i++){
        if(string[i] + string[i + 1] + string[i =3]=== 'coe'){
            count++
        }
    } 
    return count;

}


console.log(countCode("aaacodebbb"))

