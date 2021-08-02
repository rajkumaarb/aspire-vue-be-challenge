const userDao = require('../dao/userDao');

const createUser = async (req, res) => {
  try {
    let createdUser = await userDao.createUser(req.body);
    createdUser && res.status(200).json(createdUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const loginUser = async (req, res) => {
  try {
    let loggedInUser = await userDao.loginUser(req.body);
    loggedInUser && res.status(200).json(loggedInUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  createUser,
  loginUser
};