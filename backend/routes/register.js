//import bcrypt from "bcrypt";
//import Joi from "joi";
//import express from "express";
//import token from '../utils/genWebTokens'
const bcrypt =require("bcrypt");
const Joi =require('joi');
const express = require ("express");
const {User} = require("../models/users");
const genAuthToken = require( "../utils/genWebTokens");
const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
      //Validate the user from front-end
    name: Joi.string().min(3).max(17).required(),
    email: Joi.string().min(3).max(20).required().email(), //add .email() at the end to validate that it's email you are getting. the schema here is to validate the data coming from the front-end
    password: Joi.string().min(3).max(200).required(),
  });

  const {error} = schema.validate(req.body);
  if (error) return res.status(400).send("User already xist"); // error.warning[0].messagehere if there is any error in the validation of the data we are getting from the front-end, the error.warning will show

  //Before we create users, we need to verify first that the user doesn't exist.
  //check if users exists
  let user = await User.findOne({ email: req.body.email});
  //if user exist
  if (user) return res.status(400).send("User already Exist");
  
//create a user document object  to be saved on database only if user doesn't exist
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const salt = await bcrypt.genSalt(10); //this is where we encrpt the password because the password coming from front-end is raw text and we need to save before sending to backend
  user.password= await bcrypt.hash(user.password, salt);

 user = await user.save(); //Save users on the database
const token = genAuthToken(user)
  //token=genAuthToken(user)
  //once token is generated we send to the front-end for verification
  res.send(token)
});


 module.exports =router;
