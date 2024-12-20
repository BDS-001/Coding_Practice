const { Router } = require("express");
const router = Router();
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../middleware/middleware')


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

router.post('/users', verifyToken, (req, res) => {
  return res.send('POST HTTP method on user resource\n');
});
  
router.put('/users/:userId', verifyToken, (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource\n`);
});
  
router.delete('/users/:userId', verifyToken, (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource\n`);
});

router.get('/session', (req, res) => {
  return res.send(users[req.me.id]);
});

//messages
router.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

router.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

router.post('/messages', verifyToken, (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.me.id,
  };

  messages[id] = message;

  return res.send(message);
});

router.delete('/messages/:messageId', verifyToken, (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = messages;

  messages = otherMessages;

  return res.send(message);
});

//jwt security
const secretkey = 'envSecretKey'
router.post('/api/login', (req, res) => {
  const user = req.me
  jwt.sign({user}, secretkey, (err, token) => {
    res.json({
      token
    })
  })
})

router.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, secretkey, (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'Post created',
        authData,
      })
    }
  })
})

module.exports = router;