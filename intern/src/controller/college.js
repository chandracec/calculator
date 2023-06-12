const collegeModel = require('../models/collegeModel');
const internModel = require('../models/internModel');
const validUrl = require('valid-url');
const valid = require('../validate/validator');
const axios = require('axios');

const createCollege = async (req, res) => {
  try {
    const { name, fullName, logoLink } = req.body;

    if (!valid.isValidName(name)) {
      return res.status(400).send({ status: false, message: "Please enter a valid name. Only letters and whitespace are allowed." });
    }
      
    if (!validUrl.isWebUri(logoLink.trim())) {
      return res.status(400).send({ status: false, message: "Please enter a valid URL." });
    }

    await axios.get(logoLink);

    const college = await collegeModel.create(req.body);
    const collegeData = await collegeModel.findOne(college).select({ _id: 0, name: 1, fullName: 1, logoLink: 1, isDeleted: 1 });
    res.status(201).send({ status: true, data: collegeData });
  } catch (error) {
    res.status(500).send({ status: false, message: "An error occurred while creating the college" });
  }
};

const collegeDetails = async (req, res) => {
  try {
    const collegeName = req.query.collegeName;
    const college = await collegeModel.findOne({ name: collegeName }).select({ _id: 0, name: 1, fullName: 1, logoLink: 1 });

    if (!college) {
      return res.status(400).send({ status: false, message: "The college is not found" });
    }

    const collegeId = await collegeModel.findOne({ name: collegeName }).select({ _id: 1 });
    const intern = await internModel.find({ collegeId: collegeId._id }).select({ _id: 1, name: 1, email: 1, mobile: 1 });

    const collegeObject = college.toObject();

    if (intern.length === 0) {
      collegeObject.interns = "Interns are not available";
    } else {
      collegeObject.interns = intern;
    }

    res.status(200).send({ status: true, data: collegeObject });
  } catch (err) {
    res.status(500).send({ status: false, message: "An error occurred while fetching college details" });
  }
};

module.exports = { createCollege, collegeDetails };
