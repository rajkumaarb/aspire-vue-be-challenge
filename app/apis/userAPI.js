const express = require("express");
const userService = require('../service/userService');


const router = express.Router();

// http{s}://domain/api/user
router.post("/", userService.createUser);

// http{s}://domain/api/user/login
router.post("/login", userService.loginUser);

module.exports = router;