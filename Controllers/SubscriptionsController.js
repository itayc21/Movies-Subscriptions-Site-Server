

const express = require("express");
const subscriptionService = require("../Services/SubscriptionsService");

const router = express.Router();



// Get All Subscriptions
router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const subscriptions = await subscriptionService.getAllSubscriptions(filters);
    res.send(subscriptions);
  } catch (error) {
    res.send(error);
  }
});

// Get Subscription By ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const subscription = await subscriptionService.getSubscriptionById(id);
    res.send(subscription);
  } catch (error) {
    res.send(error);
  }
});

// Create a new Subscription
router.post("/", async (req, res) => {
  try {
    const subscriptionData = req.body;
    const result = await subscriptionService.addSubscription(subscriptionData);
    res.status(201).send(result);
  } catch (error) {
    res.send(error);
  }
});

// Update a Subscription
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const subscriptionData = req.body;
    const result = await subscriptionService.updateSubscription(id, subscriptionData);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// Delete a Subscription
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await subscriptionService.deleteSubscription(id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;