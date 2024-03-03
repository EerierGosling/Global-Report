// models/Danger.js
const mongoose = require('mongoose');

const dangerSchema = new mongoose.Schema({
  locationX: { type: Number, required: true },
  locationY: { type: Number, required: true },
  radius: { type: Number, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Danger', dangerSchema);
