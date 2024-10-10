const db = require("../db/queries");

async function getUsernames(req, res) {
    const searchQuery = typeof req.query.q === 'string' ? req.query.q.trim() : '';
    const usernames = await (searchQuery === '' ? db.getAllUsernames() : db.getQueriedUsernames(searchQuery));
    res.render('index', {usernames: usernames})
}

async function createUsernameGet(req, res) {
    res.render('new', {})
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteAllUsernamesGet(req, res) {
    await db.deleteAllUsernames()
    res.redirect('/')
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernamesGet
};
