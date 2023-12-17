const db = require('../models');
const User = db.user;

checkDuplicateUsername = (req, res, next) => {
    //username
    User.findOne({ username: req.body.username }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(400).send({ message: "failed! username already exists" });
        return;
      }});
    };