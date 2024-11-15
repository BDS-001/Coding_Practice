const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const pgSession = require('connect-pg-simple')(session);
const passport = require("passport")
const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy;
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

passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        const user = rows[0];
  
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return done(null, false, { message: "Incorrect password" })
        }
        return done(null, user);
      } catch(err) {
        return done(err);
      }
    })
  );

app.get("/", (req, res, next) => {
    (req.session.viewCount) ? req.session.viewCount++ : req.session.viewCount = 1
    res.send(`<h1>You have visited this page ${req.session.viewCount}</h1>`)
});

const PORT = 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}!\nVisit: http://localhost:${PORT}/`));
