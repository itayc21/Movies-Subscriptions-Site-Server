const Subscription = require("../Models/SubscriptionsModel");

// Get All Subscriptions
const getAllSubscriptions = (filters) => {
  return Subscription.find(filters);
};

// Get Subscription By ID
const getSubscriptionById = (id) => {
  return Subscription.findById(id);
};

// Create Subscription
const addSubscription = (subscriptionData) => {
  const newSubscription = new Subscription(subscriptionData);
  return newSubscription.save();
};

// Update Subscription
const updateSubscription = (id, subscriptionData) => {
  return Subscription.findByIdAndUpdate(id, subscriptionData, { new: true }); 
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
