const express = require('express')
require('dotenv').config()
const router = require('./routes/router')

const app = express()

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!\nVisit: http://localhost:${PORT}/`));