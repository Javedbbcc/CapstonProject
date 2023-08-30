import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
let newitems =[];
app.get("/", (req, res) => {
  res.render("index.ejs", {newListItems: newitems});
});

function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// Route to handle form submission
app.post('/submit', (req, res) => {
  const newitem = req.body.newitem;
  newitems.push(newitem);
  res.redirect('/');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
