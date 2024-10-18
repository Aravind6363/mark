var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/locations');
var ctrlOthers = require('../controller/others');
var ctrlMain = require('../controller/main');

// Sign-in route
exports.signin = function(req, res) {
    res.render('signin', { title: 'Sign In' }); // Ensure 'signin' matches your Pug file name
};

// Dashboard route
router.get('/', ctrlLocations.homelist); // Redirect to the dashboard
router.post('/calculate', ctrlLocations.calculateBMI); // Handle BMI calculation

// Location information routes
router.get('/locations', ctrlLocations.locationInfo);
router.get('/location1', ctrlLocations.locationInfo1);
router.get('/location/review/new', ctrlLocations.addReview);

// Other routes
router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlMain.signin);
router.get('/review', ctrlMain.review);
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

module.exports = router;
