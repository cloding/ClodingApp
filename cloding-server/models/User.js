const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  mail: String,
  country: String,
  region: String,
  city: String,
  direction: String,
  photouser: {
    type: String,
    default: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  },
  Balance: {
    type:Number,
    default: 0
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
