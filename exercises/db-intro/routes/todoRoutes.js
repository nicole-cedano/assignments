const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

// get all
todoRouter.get("/", (req, res) => {
    Todo.find((err, todos) => {
        //always handle DB errors FIRST!
        if (err) {
            //handle error
            res.status(500)
            return res.send(err)
        }
        //send back response
        return res.status(200).send(todos)
    })
})

// get one
todoRouter.get("/:_id", (req, res) => {
    Todo.findOne({ _id: req.params._id }, (err, foundTodo) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundTodo)
    })
})

// post
todoRouter.post("/", (req, res) => {
    // create the new object using our Schema(blueprint)
    console.log(req.body)
    const newTodo = new Todo(req.body)
    newTodo.save((err, newTodoObj) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodoObj)
    })
})

// delete
todoRouter.delete("/:_id", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params._id }, (err, deletedTodo) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successfully Deleted item with ID ${req.params._id}`)
    })
})

// put - update 1
todoRouter.put("/:_id", (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updatedTodo) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(updatedTodo)
    })
})





module.exports = todoRouter