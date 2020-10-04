var express = require('express');
var router = express.Router();

//use cors to allow cross origin resource sharing

let datas = [];

router.get('/home', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('Datas : ', JSON.stringify(datas));
  res.end(JSON.stringify(datas));
});

router.post('/', function(req, res) {
  const newDatas = req.body
  if(!(datas.some(e=>e.date == newDatas.date && e.title == newDatas.title && e.subject == newDatas.subject))){
    datas.push(newDatas);
  }
  console.log(datas);
});

module.exports = router;