var express = require('express');
var router = express.Router();
var path = require('path')
var bodyParser = require('body-parser');
var sql = require('../data/sql')

// create application/json parser
var jsonParser = bodyParser.json()


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
router.post('/create', jsonParser, function(req, res, next) {
  var body = JSON.stringify(req.body)
  console.log('Body: ' + body)
  console.log('fullName: ' + req.body.FullName)      
  var users = sql.addUsers({"fullName":req.body.FullName, "birthday":req.body.Birthday, "email":req.body.Email, "phone":req.body.Phone}).then((users)=>{
   //var url = usersBaseUrl + '/List.html'
   var url = '/Users/list.html'
   console.log('Send file ' + url)

   if(users){
    res.send('OK')
   }else{
    res.send('ERROR')
   }
  })
});

/* GET list page. */
router.get('/list', function(req, res, next) {
  var url = usersBaseUrl + '/List.html'
  var users = sql.getAllUsers().then((users)=>{
    var url = usersBaseUrl + '/List.html'
    res.sendFile(url)
  })
});


/* GET list page. */
router.get('/list/get', function(req, res, next) {
  var users = sql.getAllUsers().then((users)=>{
    res.send(users)
  })
});

module.exports = router;
