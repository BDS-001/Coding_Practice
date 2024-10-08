// controllers/usersController.js
const { body, validationResult } = require("express-validator");
const usersStorage = require("../storages/usersStorage");

const alphaErr = 'must only contain letters.'
const numErr = 'must only contain numbers.'
const lengthErr = 'must be between 1 and 10 characters.'

const validateUser = [
  body("firstName").trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
  body("lastName").trim()
    .isAlpha().withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
  body("age").trim()
    .optional({ checkFalsy: true })
    .isInt().withMessage(`Age ${numErr}`)
    .isInt({ min: 18, max: 100 }).withMessage('Age must be between 18 and 100.'),
  body("email").trim()
    .isEmail().withMessage('Must be a valid email address.')
    .normalizeEmail(),
  body("bio").trim()
    .optional({ checkFalsy: true })
    .isLength({max: 200}).withMessage(`Bio must be a maximum of 200 characters`),
];

exports.usersListGet = (req, res) => {
  const search = req.query.search?.trim() ?? null;
  
  if (search === '') {
    return res.redirect(req.path);
  }

  res.render("index", {
    title: "User list",
    users: search !== null ? usersStorage.getFilteredUsers(search) : usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const { firstName, lastName, age, email, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, age, email, bio });
    res.redirect("/");
  }
];

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName, age, email, bio } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName, age, email, bio });
    res.redirect("/");
  }
];

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};