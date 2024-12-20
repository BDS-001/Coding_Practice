const express = require('express')
require('dotenv').config()
const router = require('./routes/router')
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.me = {
        id: '1',
        username: 'Robin Wieruch',
    };
    next();
});

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!\nVisit: http://localhost:${PORT}/`));