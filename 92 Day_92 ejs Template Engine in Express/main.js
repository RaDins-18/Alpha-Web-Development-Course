const express = require('express')
const app = express()
const port = 3000

// EJS official site https://ejs.co/
// EJS in ExpressJS: https://github.com/mde/ejs/wiki/Using-EJS-with-Express
// EJS is a template view engine and it is used to set variables in templates.
app.set('view engine', 'ejs');

// Variables and array that can set through ejs.
let siteName = "RaDins";
let arr = ["Action 1", "Another action 2", "Something else here 3"];
let blogTitle = "Adidas why and when?";
let searchText = "Search now";
let blogContent = "Its a very good brand";

app.get('/', (req, res) => {
  // Send variables and array in html file.
  res.render("index", {siteName:siteName, searchText:searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
  // Send variables and array in html file.
  res.render("blogpost", {siteName:siteName, blogTitle:blogTitle, searchText:searchText, blogContent:blogContent, arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})