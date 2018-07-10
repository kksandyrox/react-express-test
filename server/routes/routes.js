var express = require('express');
var router = express.Router();
var MW = require('../lib/middleware');

var userController = require("../controllers/users");

// router.all('*', MW.checkApiVersion);

router.get('/users/register', userController.register);



module.exports = router;