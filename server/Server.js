


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const CreateAccountModel = require('./models/CreateAccount');
const CreateLoanAccountModel = require('./models/CreateLoanAccount');
const CreateInvestmentAccountModel = require('./models/CreateInvestmentAccount');

const SavingAccountModel = require('./models/SavingAccount');
const LoanAccountModel = require('./models/LoanAccount');
const InvestmentAccountModel = require('./models/InvestmentAccounts');

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


app.post('/CreateLoanAccount', (req, res) => {
  CreateLoanAccountModel.create(req.body)
    .then(CreateLoanAccount => res.json(CreateLoanAccount))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the account.' });
    });
});



app.post('/CreateInvestmentAccount', (req, res) => {
  CreateInvestmentAccountModel.create(req.body)
    .then(CreateInvestmentAccount => res.json(CreateInvestmentAccount))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the account.' });
    });
});


app.get('/getSavingAccount', (req, res) => {
  SavingAccountModel.find()
    .then(SavingAccount => res.json(SavingAccount))
    .catch(error => res.error(error))
});


app.get('/getLoanAccount', (req, res) => {
  LoanAccountModel.find()
    .then(LoanAccount => res.json(LoanAccount))
    .catch(error => res.error(error))
});



app.get('/getInvestmentAccount', (req, res) => {
  InvestmentAccountModel.find()
    .then(InvestmentAccount => res.json(InvestmentAccount))
    .catch(error => res.error(error))
});




app.listen(3001, () => {
  console.log('Server is running on port 3001');
});





