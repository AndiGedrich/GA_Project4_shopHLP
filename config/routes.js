var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router(),
    bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { user : req.user });
});

//user routes


var businessesController = require('../controllers/businesses');

router.route('/businesses')

  //GET all businesses
  .get(businessesController.getAll)

  //POST a new business
  .post(businessesController.createBusiness);

router.route('/businesses/:id')

  //GET return specific business
  .get(businessesController.getBusiness)

  //PATCH update existing business
  .patch(businessesController.updateBusiness)

  //DELETE remove specific business from DB
  .delete(businessesController.removeBusiness);

///EVENTS CRUD
var eventsController = require('../controllers/events');

router.route('/events')

  //GET all events
  .get(eventsController.getAll)

  //POST a new event
  .post(eventsController.createEvent);

router.route('/events/:id')

  //GET return specific event
  .get(eventsController.getEvent)

  //PATCH update existing event
  .patch(eventsController.updateEvent)

  //DELETE remove specific event from DB
  .delete(eventsController.removeEvent);







module.exports = router
