import { log } from 'console';
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'public')))

let arr = [
  {img: "img-1.png", name: "Rufle Stewart", role: "Co Founder", nationality: "American"},
  {img: "img-2.png", name: "John Smith", role: "Co Founder", nationality: "Russian"},
  {img: "img-3.png", name: "David Wehner", role: "CEO", nationality: "Jerman"},
]

app.get('/', (req, res) => {
    res.render("index", { arr })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})