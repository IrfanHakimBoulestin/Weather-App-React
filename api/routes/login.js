var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({
    token: 'test123'
  });
});

module.exports = router;
