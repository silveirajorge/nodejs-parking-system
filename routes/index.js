var express = require('express');
var router = express.Router();
const service = require("./../services/index");

/* GET home page. */
router.get("/", service.index);

module.exports = router;
