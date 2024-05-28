const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//here we use jsonwebtoken for generating token and bcryptjs is use to convert password in hash code form.

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Create a new user instance with the provided username and password.
    const user = new User({ username, password });

    // Save the new user to the database.
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res,next) => {
  const { username, password } = req.body;
  const options = {
    expires : new Date(Date.now()+process.env.COOKIE_EXPIRE * 24*60*60*1000),

    httpOnly : true,// Ensure the cookie is HTTP only.
}
  try {
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
   
    //cookie are saved in browser by sending response from server.
    res.status(200).cookie("token", token, options).json({ token,user });
 
  } catch (err) {
    // Pass the error to the next middleware (typically the error handler).
    next(err)
  }
};

exports.logout = async (req, res) => {
  res.clearCookie('token');

  // Send a response indicating the user has logged out.
  res.json('User is logout or Sign Out!');
};