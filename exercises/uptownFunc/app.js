// First function: returns contents of the array, lyrics, to the console as a string, 
// including necessary spaces.

var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
function returnLyrics(){
    return lyrics.join(' ')
}
console.log(returnLyrics(lyrics))

// Second function: returns lyrics backwards ("pretty so I'm myself kiss Gotta...").
// function returnLyricsBackwards(){
//     return lyrics.reverse().join(' ');
// }
// console.log(returnLyricsBackwards(lyrics))

// Third function: returns a string of just every other word, (e.g. "this that cold Pfeiffer...").

function everyOther(){
    const output = lyrics.filter(function(word, index){
        return index % 2 === 0
    })
    return output.join(" ")
}

console.log(everyOther())





