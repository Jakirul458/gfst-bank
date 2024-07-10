// const mongoose = require('mongoose')


// const CreateAccountSchema = new mongoose.Schema({
//     account: String,
//     date: String,
//     name: String,
//     mobile: String,
//     aadhar: String,
//     address: String,
//     email: String,
//     balance: String

// })
// const CreateAccountModel = mongoose.model('CreateAccount', CreateAccountSchema)
// module.exports = CreateAccountModel



const mongoose = require('mongoose');

const CreateAccountSchema = new mongoose.Schema({
  account: String,
  date: String,
  name: String,
  mobile: String,
  aadhar: String,
  address: String,
  email: String,
  balance: String
});

const CreateAccountModel = mongoose.model('CreateAccount', CreateAccountSchema);
module.exports = CreateAccountModel;
