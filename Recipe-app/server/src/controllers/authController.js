const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user.model.js");
const CustomError = require("../Utils/CustomError.js");

const signToken = (id) => {
  return jwt.sign({ id }, "saheedabdulraffrfdsfdfhiman123@@-nickname-is-bava");
};
exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    const token = signToken(newUser._id);

    res.status(201).json({
      status: "succes",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error in signing up " });
  }
};

exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      const error = new CustomError(
        "Please provide email and password for login",
        400
      );
      return next(error);
    }
    //check if user exist with given email
    const user = await User.findOne({ email });

    //const isMatch = await user.comparePasswordInDb(password,user.password);

    //check if user exist and passwrd matches
    if (!user || !(await user.comparePasswordInDb(password, user.password))) {
      const error = new CustomError("incorrect email or password", 400);
      return next(error);
    }

    const token = signToken(user._id);
    res.status(200).json({
      status: "succes logged in",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error in loggin in " });
  }
};
