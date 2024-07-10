const mongoose = require('mongoose');

const InvestmentAccountSchema = new mongoose.Schema({
  accountNo: String,
  date: String,
  name: String,
  mobileNo: String,
  aadharNo: String,
  address: String,
  email: String,
  balance: String,
});

const InvestmentAccountModel = mongoose.model('createinvestmentaccounts', InvestmentAccountSchema);
module.exports = InvestmentAccountModel;
