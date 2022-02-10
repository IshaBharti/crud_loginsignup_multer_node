var express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const generateToken = require("../auth/jwt");
const userModel = require("../model/userModel");

const login = async (req, res) => {
  const password = req.body.password.toString();
  try {
    const data = await User.findOne({ email: req.body.email });
    console.log(data, "+++++++++++++++++++++++++++++++");

    if (data) {
      if (await bcrypt.compare(password, data.password)) {
        const token = generateToken(data._id);

        return res.status(200).send({ status: true, message: "login successful", token: token });
      } else {
        return res.send("incorrect password");
      }
    } else {
      return res.status(404).send({ status: false, message: "User Not exist " });
    }
  } catch (err) {
    console.log(err);
    // return res.status(404).send({status:false,meessage:"user Not exist or not found"})
  }
};

module.exports = login;
