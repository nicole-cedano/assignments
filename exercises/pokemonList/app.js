var xhr = new XMLHttpRequest()
var container = document.getElementById('container')


xhr.onreadystatechange = function (){
    if(xhr.status === 200 && xhr.readyState === 4){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
        listDataToDom(data.objects[0].pokemon)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()


function listDataToDom(pokemonArr){
    for(var i = 0; pokemonArr.length; i++)
    var pokemon = console.log(pokemonArr[i])

    var name = pokemonArr[i].name
    console.log(name)
    



}

