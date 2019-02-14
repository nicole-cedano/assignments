var display = document.getElementById('count')
var button = document.getElementById('click-button')
var display1 = JSON.parse(sessionStorage.getItem("display")) || 0 

var clicks = display1
display.textContent = clicks


button.addEventListener('click', function(){
    clicks++
    display.textContent = clicks
    sessionStorage.setItem('display', JSON.stringify(clicks))
})


