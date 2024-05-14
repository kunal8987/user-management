const express = require('express');
const { registerUser } = require('../Controller/auth.controller');

let authRouter = express.Router();

authRouter.post('/register',registerUser)


module.exports = {authRouter}