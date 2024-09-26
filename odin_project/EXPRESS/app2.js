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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!\nVisit: http://localhost:3000/`);
});