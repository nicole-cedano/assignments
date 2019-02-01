var travelForm = document.travelForm
console.log(travelForm);


travelForm.addEventListener('submit', function (e) {
    e.preventDefault()
    var gender = travelForm.gender
    var diet = travelForm.diet
    var chosenCity = travelForm.location.value
    var name = travelForm.name[0].value
    var age = travelForm.age.value
    var result = []

    for (var i = 0; i < diet.length; i++) {
        if (diet[i].checked) {
            result.push(diet[i].value)
        }
    }


    alert(
        `
         First Name: ${name}
         LastName: ${travelForm.name[1].value}
         Age: ${age}
         Gender: ${gender.value}
         Location: ${chosenCity}
         Dietary Restrictions: ${result}`)
})
