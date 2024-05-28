const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
const User = require('../models/User');
const { errorHandler } = require('../util/errorHandle.js');

//this function is created for secure authentication means where we check either user is logged in or not.

exports.isLogged = async (req, res, next) => {

     const token = req.cookies.token;

      if (!token) return next(errorHandler(401, 'Unauthorized'));
      //verification of browser token is done using jsonwebtoken.
    const {id} =   jwt.verify(token, process.env.JWT_SECRET)
    req.id = id;
    next()
};
