// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});

// Define the schema
const accountSchema = new mongoose.Schema({
  account: String,
  date: String,
  name: String,
  mobile: String,
  aadhar: String,
  address: String,
  email: String,
  balance: String,
});

const Account = mongoose.model('Account', accountSchema);

// Define the route
app.post('/api/accounts', async (req, res) => {
  const { account, date, name, mobile, aadhar, address, email, balance } = req.body;
  try {
    const newAccount = new Account({
      account,
      date,
      name,
      mobile,
      aadhar,
      address,
      email,
      balance,
    });
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
