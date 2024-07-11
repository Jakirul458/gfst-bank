



// const mongoose = require('mongoose');

// const FindAccountSchema = new mongoose.Schema({
//     date: String,
//     accountNo: Number,
//     name: String,
//     mobileNo: Number,
//     aadharNo: Number,
//     email: String,
//     address: String,
//     balance: Number,
// });

// const FindAccountModel = mongoose.model('createaccounts', FindAccountSchema);
// module.exports = FindAccountModel;
  



const mongoose = require('mongoose');

const SavingAccountSchema = new mongoose.Schema({
  account: { type: Number, required: true },
  date: { type: String, required: true },
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  aadhar: { type: Number, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  balance: { type: Number, required: true },
});

const SavingAccountModel = mongoose.model('createaccounts', SavingAccountSchema);
module.exports = SavingAccountModel;

