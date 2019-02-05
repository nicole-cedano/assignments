var marioForm = document.marioForm
marioForm.addEventListener("submit", function(e){
    e.preventDefault();
    var goomba = marioForm.goombaBaddie.value
    var bobomb = marioForm.bobombBaddie.value
    var cheep = marioForm.cheepBaddie.value

    var result = ((goomba * 5 ) + (bobomb * 7 ) + (cheep * 11))
    var resultContainer = document.getElementById('container')
resultContainer.innerHTML = result
    
})
