const express = require('express')
const app = express()
const uuid = require('uuid/v4')


// array set up for fake todos database
let todos = [
    {
        name: "Nicole",
        description: "Nicole is cool",
        imageURL: "https://images.unsplash.com/photo-1535222830855-fd60aca7e065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuid()
    },
    {
        name: "A NAME",
        description: "a description",
        imageURL:"https://images.unsplash.com/photo-1535222830855-fd60aca7e065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: true,
        _id: uuid()
    },
    {
        name: "A TODO",
        description: "a todo description",
        imageURL:"https://images.unsplash.com/photo-1535222830855-fd60aca7e065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuid()
    }
]

// middleware 

app.use(express.json())

// get todos collection
app.get( "/todos", (req, res) => {
    res.send(todos)
})
// get todo resource
app.get("/todos/:_id", (req, res) => {
    const ID = req.params._id
    const foundTodo = todos.find(todo => todo._id === ID)
    res.send(foundTodo)
})

// post new todo
app.post("/todos/", (req, res) => {
    req.body._id = uuid()
    todos.push(req.body)
    res.send(req.body)
})

// update aka PUT todo
app.put("/todos/:_id", (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    Object.assign(foundTodo, req.body)
    res.send(foundTodo)
})

// DELETE id
app.delete("/todos/:_id", (req, res)=> {
    const updatedTodos = todos.filter(todo => todo._id !== req.params._id)
    todos = updatedTodos
    res.send(todos)
})



// set up endpoint listen
app.listen(6000, ()=>{
    console.log("Server is running on port 6000")
})