import express from 'express'

import User from '../models/userModel.js'

var router = express.Router();

router.route('/').get((req, res) => {
    console.log("getting users");
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/fetchUser').get((req, res) => {
    console.log("fetching user");
    User.findOne({userId: req.query.userId}, function(err, obj) {res.send(obj)})
    console.log("fetched user");
})

router.route('/makeAdmin').get((req, res) => {
    console.log("promoting")
    User.collection.updateOne(
        {userId: req.query.userId},
        { $set: {"admin": true}}
    )
})

router.route('/addUser').post((req,res) => {
    const userId = req.body.userId;
    const username = req.body.username;
    const admin = req.body.admin;

    const newUser = new User({
        userId,
        username,
        admin
    })

    newUser.save()
        .then(() => res.json("user received"))
        .catch(err => res.status(400).json('Error: ' + err));
})

export default router;