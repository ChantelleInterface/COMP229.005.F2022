// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: index.controller.js

exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('home', { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
};

exports.about= function(req, res, next) {
    res.render('home', 
    { title: 'About Me',
      userName: req.user ? req.user.username : '' 
  
    });
  }

  exports.projects = function(req, res, next) {
    res.render(
        'projectservices', 
        { 
        title: 'Projects',
        userName: req.user ? req.user.username : '' 
        }
    );
};


exports.services = function(req, res, next) {
    res.render(
      'projectservices', 
      { 
        title: 'Services',
        userName: req.user ? req.user.username : '' 
      }
    );
}
