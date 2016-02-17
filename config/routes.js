var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { user : req.user });
});

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

/// USER ROUTES

  /* GET users listing. */
  // router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // });
  // router.get('/register', function(req, res){
  //   res.render('register', { });
  // });

  // router.post('/register', function(req, res){
  //   Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account){
  //     if (err){
  //       return res.render('register', { user : user});
  //     }

  //     passport.authenticate('local')(req, res, function(){
  //       res.redirect('/');
  //     });
  //   });
  // });

  // router.get('/login', function(req, res){
  //   res.render('login', { user : req.user });
  // });

  // router.post('/login', passport.authenticate('local'), function(req, res){
  //   res.redirect('/');
  // });

  // router.get('/logout', function(req, res){
  //   req.logout();
  //   res.redirect('/');
  // });

  // router.get('/ping', function(req, res){
  //   res.status(200).send('pong');
  // });



module.exports = router
