const Member = require("../Models/MembersModel");

// Get All Members
const getAllMembers = (filters) => {
  return Member.find(filters);
};

// Get Member By ID
const getMemberById = (id) => {
  return Member.findById(id);
};

// Create Member
const addMember = (memberData) => {
  const newMember = new Member(memberData);
  return newMember.save();
};

// Update Member
const updateMember = (id, memberData) => {
  return Member.findByIdAndUpdate(id, memberData, { new: true }); 
};

// Delete Member
const deleteMember = (id) => {
  return Member.findByIdAndDelete(id);
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};
