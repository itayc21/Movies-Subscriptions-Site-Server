

const Subscription = require("../Models/SubscriptionsModel");

// Get All Subscriptions with population
const getAllSubscriptions = (filters = {}) => {
  return Subscription.find(filters).populate('movie_id').populate('member_id');
};

// Get Subscription By ID with population
const getSubscriptionById = (id) => {
  return Subscription.findById(id).populate('movie_id').populate('member_id');
};

// Create Subscription
const addSubscription = (subscriptionData) => {
  const newSubscription = new Subscription(subscriptionData);
  return newSubscription.save();
};

// Update Subscription
const updateSubscription = (id, subscriptionData) => {
  return Subscription.findByIdAndUpdate(id, subscriptionData, { new: true }).populate('movie_id').populate('member_id');
};

// Delete Subscription
const deleteSubscription = (id) => {
  return Subscription.findByIdAndDelete(id);
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
};