var express = require('express');
var router = express.Router();

const signUp = require('../Authentication/signUp');
const login = require('../Authentication/login');
const postBestTime = require('../gameEngine/mineSweeper/postBestTime')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express!' });
});

router.post('/signUp', (req, res) => {

  signUp(req, res);

  //const data = new walletModel(req.body);
  //console.log(data);
  //data.save()
  //.then(item => {
      //res.send('Wallet created!')
  //.catch(err => {
      //res.sendStatus(400).send('error')
  });
  //});
//});

router.post('/login', (req, res)=>{
  login(req, res);
});

router.post('/bestTime' , (req, res) => {
  const record = req.body.record;
  const player = req.body.player
  const seconds = req.body.seconds
  console.log(record)
  console.log(player)
  console.log(seconds)
  console.log('time post test')
  postBestTime.postBestTime(player , record , seconds)
})


module.exports = router;
