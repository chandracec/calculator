const mongoose = require('mongoose')
const collegeSchema = new mongoose.Schema({
   name: {
      type: String,
      unique: true,
      trim:true,
      required: true,
   },
   fullName: {
      type: String,
      unique: true,
      trim:true,
      required: [true,"please fill the full name of the college"]
   },
   logoLink: {
      type: String,
      trim:true,
      required: [true,"please enter the logoLink"]
   },
   isDeleted: {
      type: Boolean,
      default: false
   }
}, { timestamps: true })
module.exports = mongoose.model("college", collegeSchema)