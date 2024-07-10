// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 27017;

// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('MongoDB connected');
// }).catch((error) => {
//   console.log('MongoDB connection error:', error);
// });

// // Define the schema
// const accountSchema = new mongoose.Schema({
//   account: String,
//   date: String,
//   name: String,
//   mobile: String,
//   aadhar: String,
//   address: String,
//   email: String,
//   balance: String,
// });

// const Account = mongoose.model('Account', accountSchema);

// // Define the route
// app.post('/api/accounts', async (req, res) => {
//   const { account, date, name, mobile, aadhar, address, email, balance } = req.body;
//   try {
//     const newAccount = new Account({
//       account,
//       date,
//       name,
//       mobile,
//       aadhar,
//       address,
//       email,
//       balance,
//     });
//     await newAccount.save();
//     res.status(201).json(newAccount);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });





// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });




// const express =require("express")
// const mongoose =require("mongoose")
// const cors =require("cors")
//  const CreateAccountModel = require("./models/CreateAccount")

// const app =express()
// exports.app = app
// app.use(express.json())
// app.use(cors())
// mongoose.connect("mongodb://127.0.0.1:27017/gfst");

// app.post('/CreateAccount',(req,res)=>{
//     CreateAccountModel.create(req.body)
//     .then(CreateAccount =>res.json(CreateAccount))
//     .catch(error =>res.json(error))

// })
// app.listen(3001,()=>{
//     console.log("server is running on port 3001")
// })


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CreateAccountModel = require('./models/CreateAccount');
// const CreateLoanAccountModel = require('./models/CreateLoanAccount');
// const CreateInvestmentAccountModel = require('./models/CreateInvestmentAccount');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/gfst', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/CreateAccount', (req, res) => {
  CreateAccountModel.create(req.body)
    .then(createAccount => res.json(createAccount))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the account.' });
    });
});

/*
app.post('/CreateLoanAccount', (req, res) => {
    CreateLoanAccountModel.create(req.body)
      .then(createLoanAccount => res.json(createLoanAccount))
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the account.' });
      });
  });
*/

/*
  app.post('/CreateInvestmentAccount', (req, res) => {
    CreateInvestmentAccount.create(req.body)
      .then(CreateInvestmentAccount => res.json(CreateInvestmentAccount))
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the account.' });
      });
  });
*/


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
