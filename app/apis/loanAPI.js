const express = require('express');
const loanService = require('../service/loanService');


const router = express.Router();

// http{s}://domain/api/loan
router.post("/", loanService.createLoan);

router.put("/", loanService.approveLoan);
// same as this one

router.get("/:userKey", loanService.getLoanByUser);

module.exports = router;