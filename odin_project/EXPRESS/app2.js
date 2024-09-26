// app.js
const express = require("express");
const app = express();
const booksRouter = require("./routes/booksRouter");
const authorsRouter = require("./routes/authorsRouter");
const indexRouter = require("./routes/indexRouter");
const userRouter = require('./routes/userRouter.js')

app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use('/user', userRouter)
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!\nVisit: http://localhost:3000/`);
});