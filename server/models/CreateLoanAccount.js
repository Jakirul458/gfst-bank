const mongoose = require('mongoose');

const CreateLoanAccountSchema = new mongoose.Schema({
  account: String,
  date: String,
  name: String,
  mobile: String,
  aadhar: String,
  address: String,
  email: String,
  balance: String
});

const CreateLoanAccountModel = mongoose.model('CreateLoanAccount', CreateLoanAccountSchema);
module.exports = CreateLoanAccountModel;