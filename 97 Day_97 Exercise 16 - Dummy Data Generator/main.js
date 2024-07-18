import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import mongoose from "mongoose";
import { dataGenerator } from "./utility/utility.js";

let conn = await mongoose.connect("mongodb://localhost:27017/company");
const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up static file serving.
app.use(express.static(join(__dirname, 'public')));
 
// Set up EJS as the view engine.
app.set('view engine', 'ejs');
// Change default folder name.
app.set('views', join(__dirname, 'templates'));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/generate', (req, res) => {
  // Generate Data
  dataGenerator()
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})