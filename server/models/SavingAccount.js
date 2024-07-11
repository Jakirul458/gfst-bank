
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
  date: String,
  account: Number,
  name: String,
  mobile: Number,
  aadhar: Number,
  email: String,
  address: String,
  balance: Number,
});

const SavingAccountModel = mongoose.model('createaccounts', SavingAccountSchema);
module.exports = SavingAccountModel;




