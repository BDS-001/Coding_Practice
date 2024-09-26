// routes/indexRouter.js
const { Router } = require("express");
const userController = require('../controllers/userController.js')

const userRouter = Router();

// You can for example add a top level middleware function that handles say authentication and only let the request come in if they're authenticated
// This prevents from executing the middleware functions below if the request is not authenticated
// We will learn more about authentication in later lessons
// usually calls either next() or next(error)

// router.use(authMiddleware);

// router-level middlewares

// GET request for getting all the users
userRouter.get('/', userController.getUsers);

// You will likely place your validation/authentication middleware functions here or perhaps in the controller file, e.g.
// router.post(validationMiddleware, userController.createUser)

// POST request for creating a user
userRouter.post('/', userController.createUser);

// GET request for getting the user by id
userRouter.get('/:id', userController.getUserById);

module.exports = userRouter;
