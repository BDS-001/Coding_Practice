// controllers/formController.js
const { body, validationResult } = require("express-validator");

const validateForm = [
    body("birthdate", "Must be a valid date.")
        .optional({ values: "falsy" })
        .isISO8601(), // Enforce a YYYY-MM-DD format.
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name cannot be empty.")
        .isAlpha()
        .withMessage("Name must only contain alphabet letters."),
];

const submitForm = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('validation-form', { errors: errors.array() });
    }
    
    // If validation passes, process the form data
    console.log('Form submitted successfully!');
    console.log('Form data:', JSON.stringify(req.body, null, 2));
    res.status(302).redirect('/');
};

module.exports = {
    validateForm,
    submitForm
};