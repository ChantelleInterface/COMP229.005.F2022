var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/chantelle', function(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'Chantelle', 
      name: 'Chantelle' 
    }
  );
});

module.exports = router;
