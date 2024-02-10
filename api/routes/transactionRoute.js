const express = require('express');
const {transactionCredit, transactionDebit} = require("../controllers/transactionController")
const router = express.Router();



router.post("/transaction/credit",transactionCredit)
router.post("/transaction/debit",transactionDebit)


module.exports = router;