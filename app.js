var express = require('express')
var app = express()

app.get('/:palindrome', function(req,res){
  var str = req.params.palindrome
  var result = checkPalindrom(str)
  if(result){
    return res.sendStatus(200)
  }
  return res.sendStatus(400)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function checkPalindrom(str) {
  if(str.length > 0)
    return str == str.split('').reverse().join('');
  return false;
}

module.export = app
