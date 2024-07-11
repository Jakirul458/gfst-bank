


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//for post method model
const CreateAccountModel = require('./models/CreateAccount');
const CreateLoanAccountModel = require('./models/CreateLoanAccount');
const CreateInvestmentAccountModel = require('./models/CreateInvestmentAccount');
//for get method model
const SavingAccountModel = require('./models/SavingAccount');
const LoanAccountModel = require('./models/LoanAccount');
const InvestmentAccountModel = require('./models/InvestmentAccounts');

// const FindSavingAccountModel = require('./models/FindSavingAccount');

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
    .then(SavingAccount => {
      console.log(SavingAccount); // Log the data to verify
      res.json(SavingAccount);
    })
    .catch(error => res.status(500).json({ error: error.message }));
});


app.get('/getLoanAccount', (req, res) => {
  LoanAccountModel.find()
    .then(LoanAccount => {
      console.log(LoanAccount); // Log the data to verify
      res.json(LoanAccount);
    })
    .catch(error => res.status(500).json({ error: error.message }));
});


app.get('/getInvestmentAccount', (req, res) => {
  InvestmentAccountModel.find()
    .then(InvestmentAccount => {
      console.log(InvestmentAccount); // Log the data to verify
      res.json(InvestmentAccount);
    })
    .catch(error => res.status(500).json({ error: error.message }));
});



app.get('/get-account', async (req, res) => {
  const { account } = req.query;
  try {
    const account = await SavingAccountModel.findOne({ account: Number(account) });
    if (account) {
      res.json({ exists: true, account });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching account details.' });
  }
});

    /*
    app.get('/getSavingAccount', async (req, res) => {
      try {
        const accounts = await SavingAccountModel.findOne();
        res.json(accounts);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });


    */


    app.delete('/delete-account', async (req, res) => {
      const { accountNo } = req.query;
      try {
        await SavingAccountModel.deleteOne({ accountNo: Number(accountNo) });
        res.json({ success: true });
      } catch (error) {
        res.status(500).json({ error: 'Error deleting account.' });
      }
    });
    
    app.put('/update-account', async (req, res) => {
      const updatedAccount = req.body;
      try {
        await SavingAccountModel.updateOne({ accountNo: updatedAccount.accountNo }, updatedAccount);
        res.json({ success: true });
      } catch (error) {
        res.status(500).json({ error: 'Error updating account.' });
      }
    });



app.listen(3001, () => {
  console.log('Server is running on port 3001');
});





