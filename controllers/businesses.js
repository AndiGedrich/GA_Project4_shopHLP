var Business = require('../models/Business');

//GET

function getAll(request, response){
  Business.find(function(error, businesses){
    if(error) response.json({message: "Could not find businesses"});

    response.json({ businesses: businesses});
  }).select('-__v');
}

//POST
function createBusiness(request, response){
  var business = new Business(request.body);

  business.save(function(error){
    if(error) response.json({message: "Could not create business because:" + error});

    response.json({business: business});
  });
}

//GET
function getBusiness(request, response){
  var id = request.params.id;

  Business.findById({_id: id}, function(error, business){
    if(error) response.json({message: "Could not find business because:" + error});

    response.json({business: business});
  }).select('-__v');
}

function updateBusiness(request, response){
  var id = request.params.id;

  Business.findById({_id: id}, function(error, business){
    if(error) response.json({message: "Could not find business because:" + error});

    if(request.body.name) business.name = request.body.name;
    if(request.body.type) business.type = request.body.type;
    if(request.body.address) business.address = request.body.address;
    if(request.body.phone) business.phone = request.body.phone;
    if(request.body.website) business.website = request.body.website;
    if(request.body.storefront) business.storefront = request.body.storefront;
    if(request.body.about) business.about = request.body.about;

    business.save(function(error){
      if(error) response.json({message: "Could not update business because:" + error});

      response.json({message: "Business has been updated", business: business});
    });

  }).select('-__v');
}

function removeBusiness(request, response){
  var id = request.params.id;

  Business.remove({_id: id}, function(error){
    if(error) response.json({message: 'Could not delete business because:' + error});

    response.json({message: 'Business deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createBusiness: createBusiness,
  getBusiness: getBusiness,
  updateBusiness: updateBusiness,
  removeBusiness: removeBusiness
}


