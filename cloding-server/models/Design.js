const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designSchema = new Schema({
  type: String,
  designName: { type: String, default: '' },
  red: { type: Number, default: 255 },
  green: { type: Number, default: 255 },
  blue: { type: Number, default: 255 },
  image1: {
    url: { type: String, default: "" },
    active: { type: Boolean, default: false },
    opacity: { type: Number, default: 1 },
    saturation: { type: Number, default: 0 },
    hue: { type: Number, default: 0 },
    value: { type: Number, default: 0 },
    x: { type: Number, default: 190 },
    y: { type: Number, default: 150 },
    scaleX: { type: Number, default: 1 },
    scaleY: { type: Number, default: 1 },
    rotation: { type: Number, default: 0 }
  },
  image2: {
    url: { type: String, default: "" },
    active: { type: Boolean, default: false },
    opacity: { type: Number, default: 1 },
    saturation: { type: Number, default: 0 },
    hue: { type: Number, default: 0 },
    value: { type: Number, default: 0 },
    x: { type: Number, default: 190 },
    y: { type: Number, default: 150 },
    scaleX: { type: Number, default: 1 },
    scaleY: { type: Number, default: 1 },
    rotation: { type: Number, default: 0 }
  },
  text1: {
    text: { type: String, default: "" },
    x: { type: Number, default: 190 },
    y: { type: Number, default: 150 },
    fill: { type: String, default: "black" },
    family: { type: String, default: "Oxygen" },
    size: { type: Number, default: 20 },
    style: { type: String, default: "normal" }
  },
  text2: {
    text: { type: String, default: "" },
    x: { type: Number, default: 190 },
    y: { type: Number, default: 150 },
    fill: { type: String, default: "black" },
    family: { type: String, default: "Oxygen" },
    size: { type: Number, default: 20 },
    style: { type: String, default: "normal" }
  },
  text3: {
    text: { type: String, default: "" },
    x: { type: Number, default: 190 },
    y: { type: Number, default: 150 },
    fill: { type: String, default: "black" },
    family: { type: String, default: "Oxygen" },
    size: { type: Number, default: 20 },
    style: { type: String, default: "normal" }
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Design = mongoose.model('Design', designSchema);
module.exports = Design;