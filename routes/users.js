var express = require('express');
var router = express.Router();
var path = require('path')

const usersBaseUrl = path.join(__dirname, '../views/Users/')
const homeBaseUrl = path.join(__dirname, '../views/')


/* GET create page. */
router.get('/create', function(req, res, next) {
  console.log('GET: ' + req.originalUrl)
  var url = usersBaseUrl + '/Create.html'
  console.log('Send file ' + url)
  res.sendFile(url)
});


/* POST New User. */
router.post('/create', function(req, res, next) {
  console.log('POST: ' + req.originalUrl)
  console.log('GET: ' + req.originalUrl)
  var url = homeBaseUrl + '/index.html'
  console.log('Send file ' + url)
  res.sendFile(url)
});


/* GET list page. */
router.get('/list', function(req, res, next) {
  console.log('GET: ' + req.originalUrl)
  var url = usersBaseUrl + '/List.html'
  console.log('Send file ' + url)
  res.sendFile(url)
});

module.exports = router;
