const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    console.log("usernames will be logged here - wip")
    res.status(200).send("router is working");
});

router.get('/new', (req, res) => {
    res.render('new', {})
});

router.post('/new', (req, res) => {
    console.log("username to be saved: ", req.body.username)
    res.redirect(303, '/new');
});


module.exports = router;
