const mongoose = require('mongoose');

const CreateInvestmentAccountSchema = new mongoose.Schema({
  account: String,
  date: String,
  name: String,
  mobile: String,
  aadhar: String,
  address: String,
  email: String,
  balance: String
});

const CreateInvestmentAccountModel = mongoose.model('CreateInvestmentAccount', CreateInvestmentAccountSchema);
module.exports = CreateInvestmentAccountModel;