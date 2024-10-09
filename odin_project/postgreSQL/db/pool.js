const { Pool } = require("pg");
require('dotenv').config()

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
// module.exports = new Pool({
//   host: "localhost", // or wherever the db is hosted
//   user: "<role_name>",
//   database: "top_users",
//   password: "<role_password>",
//   port: 5432 // The default port
// });


// Again, this should be read from an environment variable
const username = process.env.DATABASE_USERNAME
const pass = process.env.DATABASE_PASS
module.exports = new Pool({
  connectionString: `postgresql://${username}:${pass}@localhost:5432/top_users`
});
