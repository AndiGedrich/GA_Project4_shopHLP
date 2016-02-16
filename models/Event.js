var mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
  title: String,
  dayOfWeek: String,
  startDate: Date,
  endDate: Date,
  startTime: String,
  endTime: String
});

module.exports = mongoose.model('Business', BusinessSchema);
