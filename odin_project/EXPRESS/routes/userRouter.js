// routes/indexRouter.js
const { Router } = require("express");
const { getUserById } = require('../controllers/userController.js')

const userRouter = Router();

router.get("/user/:id", getUserById)

module.exports = userRouter;
