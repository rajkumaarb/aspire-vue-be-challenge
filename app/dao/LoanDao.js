const Loans = require('../models/loanModel');
const uniqueCode = require('../utilities/uniqueCodeGenerator');

const createLoan = loanObj => {
  loanObj.key = uniqueCode.productUniqueCode();
  loanObj.loanId = uniqueCode.orderUniqueCode();
  loanObj.loanDue = 'Pending Admin Approval';
  loanObj.loanAmount = `S$${loanObj.loanAmount}`;
  Loans.push(loanObj);
  return loanPromise(2000, { loans: Loans, message: 'Loan created successfully' });
};


const getLoanByUser = loanObj => {
  let userLoans = [];
  if (loanObj === 'ADMIN') {
    userLoans = Loans.filter(loan => loan.loanDue === 'Pending Admin Approval');
  } else {
    userLoans = Loans.filter(loan => loan.userKey === loanObj);
  }
  if (userLoans.length) {
    return loanPromise(2000, { loans: userLoans, message: 'User loan retrieved' });
  } else {
    return rejectPromise('No Loans Found for the keyed in users');
  }
};

const approveLoan = loanObj => {
  let loanIndex = Loans.findIndex(loan => loan.loanId === loanObj.loanId);
  if (loanIndex >= 0) {
    Loans[loanIndex].loanDue = 'Next Week';
    return loanPromise(2000, { message: 'Loan approved' });
  } else {
    return rejectPromise('No Loan found for the given loan id');
  }
};

function loanPromise(delay, data) {
  let information = data || { message: 'Loan created successfully' };
  return new Promise(resolve => setTimeout(() => resolve(information), delay));
}

function rejectPromise(message) {
  return new Promise((resolve, reject) => { setTimeout(() => reject(message), 2000) });
}

module.exports = {
  approveLoan,
  createLoan,
  getLoanByUser
};