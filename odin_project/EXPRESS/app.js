require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/about", (req, res) => res.send("This is an app to test out express with node!"));

//app.all() used for all requests not just get
//'*' used to match everything
app.all('*', (req, res) => {
    res.send(`Got a ${req.method} request at /api`);
  });


const PORT = parseInt(process.env.USE_PORT, 10) || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
