// Example validation middleware code
const validateCustomerData = (req, res, next) => {
    // Validate request body for creating/updating customer data
    // Implement validation logic here
    // Example: check if required fields are present and have valid values
    if (!req.body.firstName || !req.body.lastName) {
      return res.status(400).send({ status: false, msg: "Missing required fields" });
    }
  
    next();
  };
  
  module.exports = {
    validateCustomerData,
  };
  