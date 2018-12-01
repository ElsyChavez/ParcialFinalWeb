var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
  let youtuber = {
    id: req.paramas.id,
    nombre: req.body.name,
    tema: req.body.tema,

  }
  youtuber.save();
  res.status(200).json({
    message: "the posting"
  })
});

module.exports = router;
