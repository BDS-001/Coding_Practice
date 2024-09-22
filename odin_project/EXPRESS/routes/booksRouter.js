// routes/booksRouter.js
const { Router } = require("express");

const booksRouter = Router();

booksRouter.get("/", (req, res) => res.send("All books"));
booksRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

module.exports = booksRouter;
