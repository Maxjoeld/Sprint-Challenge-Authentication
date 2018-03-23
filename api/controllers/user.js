const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

const createUser = (req, res) => {
    User.create(req.body)
    .then(user => res.json({ success: 'User saved', user}))
    .catch(err => res.json({ msg: 'Could not create User', error }));

  // or a more lengthy way of solving this without promises
  // const { username, password } = req.body;
  // const user = new User({ username, password });
  // user.save((err, user) => {
  //   if (err) return res.send(err);
  //   res.json({
  //     success: 'User saved',
  //     user
  //   });
  // });
  // remember you can also use promises for this 

  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
};

module.exports = {
  createUser
};
