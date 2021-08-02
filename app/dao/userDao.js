const User = require('../models/userModel');
const uniqueCode = require('../utilities/uniqueCodeGenerator');

const createUser = userObj => {
  userObj.key = uniqueCode.productUniqueCode();
  userObj.role = 'BUYER';
  delete userObj.confirm;
  User.push(userObj);
  return userPromise(2000, userObj);
};

const loginUser = userObj => {
  let loggedInUser = User.find(user => user.email === userObj.email);
  if (loggedInUser) {
    return userPromise(2000, { ...loggedInUser, message: 'User logged In successfully' });
  } else {
    return rejectPromise('No User Found');
  }
};

function userPromise(delay, data) {
  let information = data || { message: 'user created successfully' };
  return new Promise(resolve => setTimeout(() => resolve(information), delay));
}

function rejectPromise(message) {
  return new Promise((resolve, reject) => { setTimeout(() => reject(message), 2000) });
}

module.exports = {
  createUser,
  loginUser
};