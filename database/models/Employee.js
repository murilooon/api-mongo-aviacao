const mongoose = require('mongoose');

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  salary: Number,
  syndicate_id: {
    type: Schema.Types.ObjectId,
    ref: 'syndicate',
    required: true
  },
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('employee', EmployeeSchema);
