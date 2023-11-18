const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  date: Date,
  status: { type: Boolean, default: false },
})

module.exports = mongoose.model('Task', taskSchema);
