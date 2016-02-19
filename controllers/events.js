var Event = require('../models/Event');

//GET

function getAll(request, response){
  Event.find(function(error, events){
    if(error) response.json({message: "Could not find event"});

    response.json({ events: events});
  }).select('-__v');
}

//POST
function createEvent(request, response){
  var event = new Event(request.body);

  event.save(function(error){
    if(error) response.json({message: "Could not create event because:" + error});

    response.json({event: event});
  });
}

//GET
function getEvent(request, response){
  var id = request.params.id;

  Event.findById({_id: id}, function(error, event){
    if(error) response.json({message: "Could not find event because:" + error});

    response.json({event: event});
  }).select('-__v');
}

function updateEvent(request, response){
  var id = request.params.id;

  Event.findById({_id: id}, function(error, event){
    if(error) response.json({message: "Could not find event because:" + error});

    if(request.body.title) event.title = request.body.title;
    if(request.body.startDate) event.startDate = request.body.startDate;
    if(request.body.endDate) event.endDate = request.body.endDate;
    if(request.body.startTime) event.startTime = request.body.startTime;
    if(request.body.endTime) event.endTime = request.body.endTime;
    if(request.body.address) event.address = request.body.address;
    if(request.body.cost) event.cost = request.body.cost;

    event.save(function(error){
      if(error) response.json({message: "Could not update event because:" + error});

      response.json({message: "Event has been updated", event: event});
    });

  }).select('-__v');
}

function removeEvent(request, response){
  var id = request.params.id;

  Event.remove({_id: id}, function(error){
    if(error) response.json({message: 'Could not delete event because:' + error});

    response.json({message: 'Event deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createEvent: createEvent,
  getEvent: getEvent,
  updateEvent: updateEvent,
  removeEvent: removeEvent
}
