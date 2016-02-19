var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
  category: String,
  image: String
})

var HoursSchema = mongoose.Schema({
  day: String,
  times: String
})

var EventsSchema = mongoose.Schema({
  title: String,
  dayOfWeek: String,
  startDate: Date,
  endDate: Date,
  startTime: String,
  endTime: String,
})
var BusinessSchema = mongoose.Schema({
  name: String,
  type: String,
  address: String,
  zip: String,
  phone: String,
  website: String,
  storefront: String,
  categories: [CategorySchema],
  hours: [HoursSchema],
  events: [EventsSchema],
  about: String
})

module.exports = mongoose.model('Business', BusinessSchema);
