const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  cardNumber: String,
  cardType: String,
  customerName: String,
  status: String,
  vision: String,
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
