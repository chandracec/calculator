const Card = require("../models/cardModel");

const getAllCards = async () => {
  const cards = await Card.find();
  return cards;
};

const createCard = async (cardData) => {
  const createdCard = await Card.create(cardData);
  return createdCard;
};

module.exports = {
  getAllCards,
  createCard,
};
