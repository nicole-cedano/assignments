var input = "string"

function removeDuplicates (input) {
    var duplicate = ''
    for ( var i = 0; i < input.length; i++ ){
        if ( duplicate.indexOf(input[i] == -1)){
            duplicate += input[i];
        }
} return duplicate;
}
console.log(removeDuplicates('hannah'))

