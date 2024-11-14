const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const pgSession = require('connect-pg-simple')(session);
require('dotenv').config()

const username = process.env.DATABASE_USERNAME
const pass = process.env.DATABASE_PASS
const pool = new Pool({
  connectionString: `postgresql://${username}:${pass}@localhost:5432/auth_pract`
});

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

sessionStore = new pgSession({
    pool: pool,
    tableName: 'sesssions',
    createTableIfMissing: true
})
app.use(session({ 
    secret: "some secret", 
    resave: false, 
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.get("/", (req, res, next) => {
    res.send('<h1>Hello World (Sessions)</h1>')
});

const PORT = 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}!\nVisit: http://localhost:${PORT}/`));
