const express = require("express")
const authRouter = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')


// signup- POST -/auth/signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        // does the user exist already
        if (user) {
            res.status(400)
            return next(new Error("That username is already taken"))
        }
        // Create user
        const newUser = new User(req.body)
        // pre save hook fires encrypts password, and then the .save() is executed
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            // Create token 
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            // send response
            return res.status(201).send({ user: savedUser.withoutPassword(), token })
        })
    })
})


//login- POST
authRouter.post("/login", (req, res, next) => {
    //find a user by that username (err, user)
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        // does that user exist - send err "Username or password are incorrect"
        if (!user) {
            res.status(400)
            return next(new Error("Username or password are incorrect"))
        }
        // User.checkpassword(req.body.password) - return (err, isMatch)
        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            // if (!isMatch) - username or password are incorrect
            if (!isMatch) {
                res.status(401)
                return next(new Error("Username or password are incorrect"))
            }
            // create token 
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            // send response
            return res.status(200).send({ user: user.withoutPassword(), token })
        })
    })
})






module.exports = authRouter