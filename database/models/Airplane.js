const mongoose = require('mongoose');

const Schema = mongoose.Schema

const AirplaneSchema = new Schema({
  serial_number: Number,
  model_id: {
    type: Schema.Types.ObjectId,
    ref: 'model',
    required: true
  },
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('airplane', AirplaneSchema);
