const mongoose = require('mongoose');

const LoanAccountSchema = new mongoose.Schema({
  accountNo: String,
  date: String,
  name: String,
  mobileNo: String,
  aadharNo: String,
  address: String,
  email: String,
  balance: String,
});

const LoanAccountModel = mongoose.model('createloanaccounts', LoanAccountSchema);
module.exports = LoanAccountModel;
