var mongoose = require('mongoose');

var BusinessSchema = mongoose.Schema({
  name: String,
  type: String,
  address: String,
  zip: String,
  phone: String,
  website: String,
  storefront: String,
  categories: [
          { category: String,
            image: String},
          ],
  hours: [
        { day: String,
          times: String },
        ],
  events: [
        { title: String,
          startDate: Date,
          endDate: Date,
          startTime: String,
          endTime: String }
        ],
  about: String
      },
});

module.exports = mongoose.model('Business', BusinessSchema);
