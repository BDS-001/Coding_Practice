require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
    res.render("index", { links: links, users: users });
});
app.get('/about', (req, res) => {
    res.render('about', { links: links})
})

const PORT = parseInt(process.env.USE_PORT, 10) || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!\nVisit: http://localhost:3000/`));