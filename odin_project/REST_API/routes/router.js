const { Router } = require("express");
const router = Router();

router.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource\n');
});
  
router.post('/users', (req, res) => {
return res.send('POST HTTP method on user resource\n');
});

router.put('/users/:userId', (req, res) => {
return res.send(`PUT HTTP method on user/${req.params.userId} resource\n`);
});

router.delete('/users/:userId', (req, res) => {
return res.send(`DELETE HTTP method on user/${req.params.userId} resource\n`);
});

module.exports = router;