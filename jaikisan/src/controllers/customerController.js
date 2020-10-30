const customerService = require("../services/customer");

const getAllCustomers = async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.status(200).send({ status: true, data: customers });
  } catch (err) {
    res.status(500).send({ status: false, error: err });
  }
};

const deleteCustomer = async (req, res) => {
  const customerId = req.params.customerId;

  try {
    const deletedCustomer = await customerService.deleteCustomer(customerId);
    if (!deletedCustomer) {
      res.status(404).send({ status: false, msg: "Customer not found" });
    } else {
      res.status(200).send({ status: true });
    }
  } catch (err) {
    res.status(500).send({ status: false, error: err });
  }
};

const createCustomer = async (req, res) => {
  const customerData = req.body;

  try {
    const createdCustomer = await customerService.createCustomer(customerData);
    res.status(201).send({ status: true, data: createdCustomer });
  } catch (err) {
    res.status(400).send({ status: false, msg: err.message });
  }
};

module.exports = {
  getAllCustomers,
  deleteCustomer,
  createCustomer,
};
