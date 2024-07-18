import mongoose from "mongoose";

// Schema is used to store data in specific formats.
// Make a schema for setting data.
const TodoSchema = new mongoose.Schema({
  title: {type: String, required: true, default: "Hey"},
  desc: String, // String is shorthand for {type: String}.
  isDone: Boolean,
  days: Number,
});

export const Todo = mongoose.model("Todo", TodoSchema)