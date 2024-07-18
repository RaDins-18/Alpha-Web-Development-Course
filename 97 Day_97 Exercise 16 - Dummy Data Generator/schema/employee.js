import mongoose from 'mongoose';
const { Schema } = mongoose;

const employee = new Schema({
  name: {type: String, required: true,},
  salary: {type: Number, default: 50000},
  language: {type: String, required: true},
  city: {type: String, default: "New York"},
  isManager: {type: Boolean, required: true}
});

export const Employee = mongoose.model("Employee", employee)