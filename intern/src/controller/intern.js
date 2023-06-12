const collegeModel = require('../models/collegeModel');
const internModel = require('../models/internModel');
const valid = require('../validate/validator');

const createIntern = async (req, res) => {
  try {
    const data = req.body;
    const { name, email, mobile } = data;

    // Validate name format
    if (!valid.isValidName(name)) {
      return res.status(400).send({ status: false, message: "Name should only contain letters" });
    }

    // Validate email 
    if (!valid.validEmail(email)) {
      return res.status(400).send({ status: false, message: "Please enter a valid email address" });
    }

    // Validate mobile number format
    if (!valid.validMobile(mobile)) {
      return res.status(400).send({ status: false, message: "Please enter a valid mobile number" });
    }

    const collegeName = data.collegeName;

    // Check if college name is provided
    if (!collegeName) {
      return res.status(400).send({ status: false, message: "Please enter the college name" });
    }

    const college = await collegeModel.findOne({ name: collegeName });

    // Check if college exists
    if (!college) {
      return res.status(400).send({ status: false, message: "Please enter the correct college name" });
    }

    const collegeId = college._id;
    const intern = await internModel.create({ name, email, mobile, collegeId });
    const resIntern = await internModel.findOne(intern).select({ _id: 0, isDeleted: 1, name: 1, email: 1, mobile: 1, collegeId: 1 });
    res.status(201).send({ status: true, data: resIntern });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports.createIntern = createIntern;
