const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ModelSchema = new Schema({
  name: String,
  capacity: Number,
  weight: Number
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('model', ModelSchema);
