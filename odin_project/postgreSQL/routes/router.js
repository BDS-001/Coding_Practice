const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.getUsernames);
router.get('/new', usersController.createUsernameGet);
router.post('/new', usersController.createUsernamePost);
router.get('/delete', usersController.deleteAllUsernamesGet);

module.exports = router;
