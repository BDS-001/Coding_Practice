// app.js
const express = require("express");
const app = express();
const booksRouter = require("./routes/booksRouter");
const authorsRouter = require("./routes/authorsRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});