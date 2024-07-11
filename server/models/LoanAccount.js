const mongoose = require('mongoose');

const LoanAccountSchema = new mongoose.Schema({
  account: Number,
  date: String,
  name: String,
  mobile: Number,
  aadhar: Number,
  address: String,
  email: String,
  balance: String,
});

const LoanAccountModel = mongoose.model('createloanaccounts', LoanAccountSchema);
module.exports = LoanAccountModel;
