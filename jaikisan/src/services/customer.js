const Customer = require("../models/customerModel");

const getAllCustomers = async () => {
  const customers = await Customer.find({ status: "ACTIVE" });
  return customers;
};

const deleteCustomer = async (customerId) => {
  const deletedCustomer = await Customer.findByIdAndDelete(customerId);
  return deletedCustomer;
};

const createCustomer = async (customerData) => {
  const createdCustomer = await Customer.create(customerData);
  return createdCustomer;
};

module.exports = {
  getAllCustomers,
  deleteCustomer,
  createCustomer,
};
