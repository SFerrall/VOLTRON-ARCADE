var express = require('express');
var router = express.Router();

const signUp = require('../Authentication/signUp');
const login = require('../Authentication/login');
const postBestTime = require('../gameEngine/postBestTime')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express!' });
});

router.post('/signUp', (req, res) => {
  signUp(req, res);
});

router.post('/login', (req, res)=>{
  login(req, res);
});

router.post('/bestTime' , (req, res) => {
  const record = req.body.record;
  const player = req.body.player
  const seconds = req.body.seconds
  postBestTime.postBestTime(player , record , seconds)
})


module.exports = router;
