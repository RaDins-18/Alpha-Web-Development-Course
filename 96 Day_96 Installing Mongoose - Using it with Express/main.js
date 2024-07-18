// MongoDB module for simple uses but we use Mongoose for complex uses.
// https://www.npmjs.com/package/mongodb

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./schema/Todo.js";

// Connect local database.
let conn = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new Todo({ title: "It's my first title", desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5 * Math.random()) });
  todo.save(); // Save the todo.
  res.send('Hello World!')
})

app.get('/todo', async (req, res) => {
  const todo = await Todo.findOne({});
  res.json(todo);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})