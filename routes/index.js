var express = require('express');
var router = express.Router();

let pageController = require("../controllers/pageController");

/* GET home page. */
router.get('/', pageController.default);
router.get('/home', pageController.home);

module.exports = router;