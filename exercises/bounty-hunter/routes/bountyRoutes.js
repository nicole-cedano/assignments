const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid/v4')

// fake database of bounties 
let bounties = [
    {
        firstName: "Nicole",
        lastName: "Cedano",
        living: true,
        bountyAmount: 5,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Bane",
        living: false,
        bountyAmount: 1000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Dark",
        lastName: "Lord",
        living: false,
        bountyAmount: 800,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: true,
        bountyAmount: 2000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: false,
        bountyAmount: 1500,
        type: "Jedi",
        _id: uuid()
    }
]



bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(newBounty)
    })

bountyRouter.route("/:_id")
    .get((req, res)=> {
        const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
        res.send(foundBounty)
    })
    .put((req, res)=> {
        const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
        Object.assign(foundBounty, req.body)
        res.send(foundBounty)
    })
    .delete((req, res) => {
        const updatedBounty = bounties.filter(bounty => bounty._id !== req.params._id)
        bounties = updatedBounty
        res.send("Bounty Successfully Deleted")
    })





module.exports = bountyRouter