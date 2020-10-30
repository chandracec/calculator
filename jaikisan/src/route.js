const express = require("express");
const router = express.Router();
const custCtrl = require("./controllers/customerController");
const cardCtrl = require("./controllers/cardController");
const validationMiddleware = require("./middlewares/validate");

// Customer API routes
router.get("/customers", custCtrl.getAllCustomers);
router.delete("/customers/:id", custCtrl.deleteCustomer);
router.post("/customers", validationMiddleware.validateCustomerData, custCtrl.createCustomer);

// Card API routes
router.get("/cards", cardCtrl.getAllCards);
router.post("/cards", cardCtrl.createCard);

module.exports = router;
