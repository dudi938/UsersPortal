var express = require('express');
var router = express.Router();
var path = require("path");

const homeBaseUrl = path.join(__dirname, '../views/')


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('GET: ' + req.originalUrl)
  var url = homeBaseUrl + '/index.html'
  console.log('Send file ' + url)
  res.sendFile(url)
});
module.exports = router;