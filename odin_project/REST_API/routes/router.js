const { Router } = require("express");
const router = Router();

let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };
  
  let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };

router.get('/users', (req, res) => {
    return res.send(Object.values(users));
});

router.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});

router.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});
  
router.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
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