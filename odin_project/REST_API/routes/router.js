const { Router } = require("express");
const router = Router();
import { v4 as uuidv4 } from 'uuid';

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


//users
router.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

router.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
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


//messages
router.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

router.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

router.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text
  };

  messages[id] = message;

  return res.send(message);
});

module.exports = router;