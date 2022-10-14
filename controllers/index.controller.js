// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: index.controller.js

exports.home = function(req, res, next) {
    res.render(
        'home', 
        { 
        title: 'Home', 
        name: 'Chantelle' 
        }
    );
};

exports.projects = function(req, res, next) {
    res.render(
        'projectservices', 
        { 
        title: 'Projects',
        }
    );
};

exports.services = function(req, res, next) {
    res.render(
      'projectservices', 
      { 
        title: 'Services',
      }
    );
  }