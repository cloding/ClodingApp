const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const connectorSchema = new Schema({
    userid : {
        type:Schema.Types.ObjectId, 
        ref:'User'
    },
    designid : {
        type:Schema.Types.ObjectId, 
        ref:'Design'
    },
    shopcart : {
        type:Boolean,
        default:false
    },
    quantity : {
        type:Number,
        default:0
    }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Connector = mongoose.model('Connector', userSchema);
module.exports = Connector;