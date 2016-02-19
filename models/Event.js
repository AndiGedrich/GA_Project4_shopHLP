var mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
  title: String,
  dayOfWeek: String,
  startDate: Date,
  endDate: Date,
  startTime: String,
  endTime: String,
  address: String,
  cost: Number
});

module.exports = mongoose.model('Event', EventSchema);
