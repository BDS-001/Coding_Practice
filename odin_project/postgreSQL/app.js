const express = require("express");
const path = require("path");
const router = require("./routes/router");
require('dotenv').config()

const app = express();

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!\nVisit: http://localhost:${PORT}/`));