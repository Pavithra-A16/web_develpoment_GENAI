const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  salary: Number,
  joiningDate: Date,
  dateOfBirth: Date,
});

module.exports = mongoose.model('Employee', EmployeeSchema);
