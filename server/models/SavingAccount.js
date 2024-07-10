
// const mongoose = require('mongoose');

// const SavingAccountSchema = new mongoose.Schema({
//   account: String,
//   date: String,
//   name: String,
//   mobile: String,
//   aadhar: String,
//   address: String,
//   email: String,
//   balance: String
// });

// const SavingAccountModel = mongoose.model('createaccounts', SavingAccountSchema);
// module.exports = SavingAccountModel;



// models/SavingAccount.js
const mongoose = require('mongoose');

const SavingAccountSchema = new mongoose.Schema({
  accountNo: String,
  date: String,
  name: String,
  mobileNo: String,
  aadharNo: String,
  address: String,
  email: String,
  balance: String,
});

const SavingAccountModel = mongoose.model('createaccounts', SavingAccountSchema);
module.exports = SavingAccountModel;
