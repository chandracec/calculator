const Card = require("../models/cardModel");
const cardService = require("../services/card");

const getAllCards = async (req, res) => {
  try {
    const cards = await cardService.getAllCards();
    res.status(200).send({ status: true, data: cards });
  } catch (err) {
    res.status(500).send({ status: false, error: err });
  }
};

const createCard = async (req, res) => {
  const cardData = req.body;

  try {
    const createdCard = await cardService.createCard(cardData);
    res.status(201).send({ status: true, data: createdCard });
  } catch (err) {
    res.status(400).send({ status: false, msg: err.message });
  }
};

module.exports = {
  getAllCards,
  createCard,
};
