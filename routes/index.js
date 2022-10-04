var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render(
    'home', 
    { 
      title: 'Home', 
    }
  );
});

router.get('/about', function(req, res, next) {
  res.render('home', 
  { title: 'About Me',
    name: 'Chantelle'

  });
});

router.get('/projects', function(req, res, next) {
  res.render(
    'projectservices', 
    { 
      title: 'Projects',
    }
  );
});

router.get('/services', function(req, res, next) {
  res.render(
    'projectservices', 
    { 
      title: 'Services',
    }
  );
});


module.exports = router;
