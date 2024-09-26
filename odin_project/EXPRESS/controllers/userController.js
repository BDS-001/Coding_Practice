const asyncHandler = require('express-async-handler')

async function someDBQueryToGetUser(userId) {
    return {id: userId, name: 'bob'}
}

// Any errors that is thrown in this function will automatically be caught and call the `next` function
const getUserById = asyncHandler(async (req, res) => {
    const userId = req.params.id;
  
    const user = await someDBQueryToGetUser(userId);
  
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
  
    res.send(`User found: ${user.name}`);
  });

  module.exports = {
    getUserById
  }