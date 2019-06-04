const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designSchema = new Schema({
  type: String,
  designName: { type: String, default: '' },
  quantity: { type: Number, default: 1 },
  price: { type: Number, default: 30 },
  red: { type: Number, default: 255 },
  green: { type: Number, default: 255 },
  blue: { type: Number, default: 255 },
  front: {
    image1: {
      imageUrl: { type: String, default: "" },
      imageUrlFix: { type: String, default: "" },
      active: { type: Boolean, default: false },
      x: { type: Number, default: 190 },
      y: { type: Number, default: 150 },
      opacity: { type: Number, default: 1 },
      scaleX: { type: Number, default: 1 },
      scaleY: { type: Number, default: 1 },
      rotation: { type: Number, default: 0 },
      hue: { type: Number, default: 0 },
      saturation: { type: Number, default: 0 },
      value: { type: Number, default: 0 }
    },
    image2: {
      imageUrl: { type: String, default: "" },
      imageUrlFix: { type: String, default: "" },
      active: { type: Boolean, default: false },
      x: { type: Number, default: 190 },
      y: { type: Number, default: 150 },
      opacity: { type: Number, default: 1 },
      scaleX: { type: Number, default: 1 },
      scaleY: { type: Number, default: 1 },
      rotation: { type: Number, default: 0 },
      hue: { type: Number, default: 0 },
      saturation: { type: Number, default: 0 },
      value: { type: Number, default: 0 }
    },
    image3: {
      imageUrl: { type: String, default: "" },
      imageUrlFix: { type: String, default: "" },
      active: { type: Boolean, default: false },
      x: { type: Number, default: 190 },
      y: { type: Number, default: 150 },
      opacity: { type: Number, default: 1 },
      scaleX: { type: Number, default: 1 },
      scaleY: { type: Number, default: 1 },
      rotation: { type: Number, default: 0 },
      hue: { type: Number, default: 0 },
      saturation: { type: Number, default: 0 },
      value: { type: Number, default: 0 }
    },
    image4: {
      imageUrl: { type: String, default: "" },
      imageUrlFix: { type: String, default: "" },
      active: { type: Boolean, default: false },
      x: { type: Number, default: 190 },
      y: { type: Number, default: 150 },
      opacity: { type: Number, default: 1 },
      scaleX: { type: Number, default: 1 },
      scaleY: { type: Number, default: 1 },
      rotation: { type: Number, default: 0 },
      hue: { type: Number, default: 0 },
      saturation: { type: Number, default: 0 },
      value: { type: Number, default: 0 }
    },
    text1: {
      text: { type: String, default: "" },
      textFill: { type: String, default: "black" },
      textFamily: { type: String, default: "Oxygen" },
      textSize: { type: Number, default: 20 },
      textStyle: { type: String, default: "normal" },
      textRotation: { type: Number, default: 0 },
      textX: { type: Number, default: 190 },
      textY: { type: Number, default: 150 }
    },
    text2: {
      text: { type: String, default: "" },
      textFill: { type: String, default: "black" },
      textFamily: { type: String, default: "Oxygen" },
      textSize: { type: Number, default: 20 },
      textStyle: { type: String, default: "normal" },
      textRotation: { type: Number, default: 0 },
      textX: { type: Number, default: 190 },
      textY: { type: Number, default: 150 }
    },
    text3: {
      text: { type: String, default: "" },
      textFill: { type: String, default: "black" },
      textFamily: { type: String, default: "Oxygen" },
      textSize: { type: Number, default: 20 },
      textStyle: { type: String, default: "normal" },
      textRotation: { type: Number, default: 0 },
      textX: { type: Number, default: 190 },
      textY: { type: Number, default: 150 }
    },
    text4: {
      text: { type: String, default: "" },
      textFill: { type: String, default: "black" },
      textFamily: { type: String, default: "Oxygen" },
      textSize: { type: Number, default: 20 },
      textStyle: { type: String, default: "normal" },
      textRotation: { type: Number, default: 0 },
      textX: { type: Number, default: 190 },
      textY: { type: Number, default: 150 }
    }
  },
  back: {
    image1: {
      imageUrl: { type: String, default: "" },
      imageUrlFix: { type: String, default: "" },
      active: { type: Boolean, default: false },
      x: { type: Number, default: 190 },
      y: { type: Number, default: 150 },
      opacity: { type: Number, default: 1 },
      scaleX: { type: Number, default: 1 },
      scaleY: { type: Number, default: 1 },
      rotation: { type: Number, default: 0 },
      hue: { type: Number, default: 0 },
      saturation: { type: Number, default: 0 },
      value: { type: Number, default: 0 }
    },
    image2: {
      imageUrl: { type: String, default: "" },
      imageUrlFix: { type: String, default: "" },
      active: { type: Boolean, default: false },
      x: { type: Number, default: 190 },
      y: { type: Number, default: 150 },
      opacity: { type: Number, default: 1 },
      scaleX: { type: Number, default: 1 },
      scaleY: { type: Number, default: 1 },
      rotation: { type: Number, default: 0 },
      hue: { type: Number, default: 0 },
      saturation: { type: Number, default: 0 },
      value: { type: Number, default: 0 }
    },
    image3: {
      imageUrl: { type: String, default: "" },
      imageUrlFix: { type: String, default: "" },
      active: { type: Boolean, default: false },
      x: { type: Number, default: 190 },
      y: { type: Number, default: 150 },
      opacity: { type: Number, default: 1 },
      scaleX: { type: Number, default: 1 },
      scaleY: { type: Number, default: 1 },
      rotation: { type: Number, default: 0 },
      hue: { type: Number, default: 0 },
      saturation: { type: Number, default: 0 },
      value: { type: Number, default: 0 }
    },
    image4: {
      imageUrl: { type: String, default: "" },
      imageUrlFix: { type: String, default: "" },
      active: { type: Boolean, default: false },
      x: { type: Number, default: 190 },
      y: { type: Number, default: 150 },
      opacity: { type: Number, default: 1 },
      scaleX: { type: Number, default: 1 },
      scaleY: { type: Number, default: 1 },
      rotation: { type: Number, default: 0 },
      hue: { type: Number, default: 0 },
      saturation: { type: Number, default: 0 },
      value: { type: Number, default: 0 }
    },
    text1: {
      text: { type: String, default: "" },
      textFill: { type: String, default: "black" },
      textFamily: { type: String, default: "Oxygen" },
      textSize: { type: Number, default: 20 },
      textStyle: { type: String, default: "normal" },
      textRotation: { type: Number, default: 0 },
      textX: { type: Number, default: 190 },
      textY: { type: Number, default: 150 }
    },
    text2: {
      text: { type: String, default: "" },
      textFill: { type: String, default: "black" },
      textFamily: { type: String, default: "Oxygen" },
      textSize: { type: Number, default: 20 },
      textStyle: { type: String, default: "normal" },
      textRotation: { type: Number, default: 0 },
      textX: { type: Number, default: 190 },
      textY: { type: Number, default: 150 }
    },
    text3: {
      text: { type: String, default: "" },
      textFill: { type: String, default: "black" },
      textFamily: { type: String, default: "Oxygen" },
      textSize: { type: Number, default: 20 },
      textStyle: { type: String, default: "normal" },
      textRotation: { type: Number, default: 0 },
      textX: { type: Number, default: 190 },
      textY: { type: Number, default: 150 }
    },
    text4: {
      text: { type: String, default: "" },
      textFill: { type: String, default: "black" },
      textFamily: { type: String, default: "Oxygen" },
      textSize: { type: Number, default: 20 },
      textStyle: { type: String, default: "normal" },
      textRotation: { type: Number, default: 0 },
      textX: { type: Number, default: 190 },
      textY: { type: Number, default: 150 }
    }
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Design = mongoose.model('Design', designSchema);
module.exports = Design;