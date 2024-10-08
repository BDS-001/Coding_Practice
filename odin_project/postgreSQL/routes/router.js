const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    console.log("usernames will be logged here - wip")
    res.status(200).send("router is working");
});

router.get('/new', (req, res) => {
    res.render('new', {})
});



module.exports = router;
