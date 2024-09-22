require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/about", (req, res) => res.send("This is an app to test out express with node!"));
app.get('/:user/messages', (req, res) => {
    //exmple url: http://localhost:3000/joe/messages?this=that&foo=bar
    console.log(req.params)
    console.log(req.query)
    
    const userMessages = `${req.params.user}'s list of messages`;
    const queryList = `list of queries: ${JSON.stringify(req.query)}`;
    
    res.send(`${userMessages}\n${queryList}`);
})

//app.all() used for all requests not just get
//'*' used to match everything
//catch all, needs to be at the end of the code
app.all('*', (req, res) => {
    res.send(`Got a ${req.method} request at /api`);
  });


const PORT = parseInt(process.env.USE_PORT, 10) || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
