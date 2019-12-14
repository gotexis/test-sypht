const express = require('express');
const router = express.Router();
const sypht = require('sypht-node-client');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {title: 'Express'});
});




router.post('/upload', async (req, res, next) => {
  // let data = await sypht.fileUpload(['sypht.invoice', 'sypht.document'], './sample_invoice.pdf');
  // data = await sypht.fetchResults(data['fileId']);
  // console.log(JSON.stringify(data, null, 2));
  res.send('hello world')
});


const GENERIC = 'sypht.generic'
const DOCUMENT = 'sypht.document'
const INVOICE = 'sypht.invoice'
const BILL = 'sypht.bill'
const BANK = 'sypht.bank'

module.exports = router;
