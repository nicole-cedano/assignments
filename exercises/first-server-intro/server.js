const express = require('express')
const app = express()
const uuid = require('uuid/v4')


//Fake DataBase 
let people = [
    {
        name: "Rick",
        age: 70,
        _id: uuid()
    },
    {
        name: "Morty",
        age: 13,
        _id: uuid()
    },
    {
        name: "Birdman",
        age: "unknown",
        _id: uuid()
    }
]

// middleware
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hola, Mundo!")
})

app.get("/anything", (req, res) => {
    res.send('Howdy, Partner!')
})

app.get("/something", (req, res) => {
    res.send("Hello, World!")
})
// GET ALL
app.get("/people", (req, res) => {
    res.send(people)
})
// GET ONE 
app.get('/people/:_id', (req,res) => {
    const ID = req.params._id
    const foundPerson = people.find(person => person._id === ID)
    res.send(foundPerson)
})
app.post('/people', (req, res) => {
    // add id to request body
    // add to the database (this one is fake)
    req.body._id = uuid()
    people.push(req.body)
    //send back updated object
    res.send(req.body)

})

// DELETE
app.delete('/people/:_id', (req,res) => {
    const updatedPeople = people.filter(person => person._id !== req.params._id)
    people = updatedPeople
    res.send(people)
})
app.put('/people/:_id', (req,res)=>{
    const foundPerson = people.find(person => person._id === req.params._id)

    Object.assign(foundPerson, req.body)
    res.send(foundPerson)
})
app.listen(5800, () => {
    console.log("Server is running on port 5800")
})


