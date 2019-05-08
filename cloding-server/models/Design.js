const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const designSchema = new Schema({
    designtitle: String,
    designtype: String,
    photopreview: String,
    price: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Design = mongoose.model('Design', designSchema);
module.exports = Design;