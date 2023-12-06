const User = require('../models/userModel')
const mongoose = require('mongoose')
// get all users
const getUsers = async(req, res) =>{
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}
// get a single user
const getUser = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such user"})
    }

    const user = await User.findById(id)
    if(!user){
        return res.status(404).json({error: "No such user"})
    }

    res.status(200).json(user)
}
// create a new user
const createUser = async (req, res) => {
    const { name, email, password, education, profilePicture, graduationYear, major, career, jobPosition, company, groupsJoined, groupsOwned } = req.body;

    // Exclude confirmPassword from the request body
    const { confirmPassword, ...userData } = req.body;

    // Add doc to the database
    try {
        const user = await User.create(userData);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
//delete a user
const deleteUser = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such user"})
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user){
        return res.status(404).json({error: "No such user"})
    }

    res.status(200).json(user)
}
//update a user
const updateUser = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such user id"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user) {
        return res.status(400).json({error: 'No such user'})
    }

    res.status(200).json(user)

}
const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const isPasswordMatch = await user.comparePassword(password);
  
      if (!isPasswordMatch) {
        return res.status(401).json({ error: 'Incorrect password' });
      }
  
      // Passwords match, consider the user logged in
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    loginUser
}