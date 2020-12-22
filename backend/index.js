let eBay = require('ebay-node-api')
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const request = require('request');
// const logger = require("morgan");
const port = process.env.PORT || 5000; 
const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use('/api/products', require('./routes/products'));

app.listen(port, () => {
  console.log('Server started at http://localhost:5000');
});