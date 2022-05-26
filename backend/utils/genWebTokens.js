//import jwt from "jsonwebtoken";
const jwt =require("jsonwebtoken");
//We here, generate a token to be able to register and sign users in...



const genAuthToken = (user) => {
  const secretkey = supersecretkey43333;
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },secretkey);
  return token;
};




module.exports =  genAuthToken;