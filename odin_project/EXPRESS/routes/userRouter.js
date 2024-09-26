// routes/indexRouter.js
const { Router } = require("express");
const { getUserById } = require('../controllers/userController.js')

const userRouter = Router();

userRouter.get("/:id", getUserById)

module.exports = userRouter;
