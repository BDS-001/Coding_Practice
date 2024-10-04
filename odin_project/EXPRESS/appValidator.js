const { body, validationResult } = require("express-validator");
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const { validateForm, submitForm } = require("./controllers/formController");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('validation-form', {})
})
app.post('/submit-form', validateForm, submitForm);

const PORT = parseInt(process.env.USE_PORT, 10) || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!\nVisit: http://localhost:3000/`));