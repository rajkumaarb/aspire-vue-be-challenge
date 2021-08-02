const loanDao = require('../dao/loanDao');

const createLoan = async (req, res) => {
  try {
    let createdLoan = await loanDao.createLoan(req.body);
    createdLoan && res.status(200).json(createdLoan);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getLoanByUser = async (req, res) => {
  try {
    let userLoans = await loanDao.getLoanByUser(req.params.userKey);
    userLoans && res.status(200).json(userLoans);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const approveLoan = async (req, res) => {
  try {
    let approvedLoan = await loanDao.approveLoan(req.body);
    approvedLoan && res.status(200).json(approvedLoan);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

module.exports = {
  approveLoan,
  createLoan,
  getLoanByUser
}