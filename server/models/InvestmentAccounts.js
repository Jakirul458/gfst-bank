const mongoose = require('mongoose');

const InvestmentAccountSchema = new mongoose.Schema({
  account: Number,
  date: String,
  name: String,
  mobile: Number,
  aadhar: Number,
  address: String,
  email: String,
  balance: String,
});

const InvestmentAccountModel = mongoose.model('createinvestmentaccounts', InvestmentAccountSchema);
module.exports = InvestmentAccountModel;
