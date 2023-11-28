// controllers/user.controller.js
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// CREATE: Sign up a new user
const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Get all users
const listUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude password from the results
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Get a single user by ID
const readUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Update a user's information
const updateUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user = Object.assign(user, req.body);
    await user.save();
    user.password = undefined; // Ensure the password is not sent back
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.deleteOne( { id :  req.params.userId } );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Sign in a user and generate a JWT
const signIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    const isMatch = await user.verifyPassword(req.body.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get the currently logged-in user
const getLoggedInUser = (req, res) => {
  const userId = req.user._id;
  User.findById(userId).select('-password')
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Add the authenticate middleware to routes that require authentication
//router.get('/me', authenticate, userController.getLoggedInUser);


// Sign out a user
const signOut = (req, res) => {
  // Optionally perform additional cleanup or logging out logic
  res.json({ message: 'User signed out successfully' });
};

const userController = {
  createUser,
  signIn,
  listUsers,
  readUser,
  updateUser,
  deleteUser,
  getLoggedInUser,
  signOut, // Add the signOut method
};

export default userController;
