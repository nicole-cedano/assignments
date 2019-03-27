const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')


bountyRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })

    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
 
        })
    })

bountyRouter.route("/:_id")
    .get((req, res, next) => {
        Bounty.findOne({ _id: req.params._id }, (err, bounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounty)
        })
    })
    .put((req, res, next) => {
        Bounty.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            { new: true },
            (err, updatedBounty) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
            })
    })
    .delete((req, res, next) => {
        Bounty.findOneAndRemove({ _id: req.params._id }, (err, deletedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(202).send(`Bounty ${deletedBounty.firstName} ${deletedBounty.lastName} removed`)
        })
    })


module.exports = bountyRouter