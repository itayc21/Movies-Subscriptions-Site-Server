const User = require("../Models/UsersModel");

// Get All Users
const getAllUsers = (filters) => {
  return User.find(filters);
};

// Get User By ID
const getUserById = (id) => {
  return User.findById(id);
};

// Create User
const addUser = (userData) => {
  const newUser = new User(userData);
  return newUser.save();
};

// Update User
const updateUser = (id, userData) => {
  return User.findByIdAndUpdate(id, userData, { new: true }); 
};

// Delete User
const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
