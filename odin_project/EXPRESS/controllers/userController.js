const asyncHandler = require('express-async-handler')

async function someDBQueryToGetUser(userId) {
    return userId === '08' ? {id: userId, name: 'bob'} : null
}

class CustomNotFoundError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 404;
      // So the error is neat when stringified. NotFoundError: message instead of Error: message
      this.name = "NotFoundError";
    }
  }

// Any errors that is thrown in this function will automatically be caught and call the `next` function
const getUserById = asyncHandler(async (req, res) => {
    const userId = req.params.id;
  
    const user = await someDBQueryToGetUser(userId);
  
    if (!user) {
      throw new CustomNotFoundError("User not found");
    }
  
    res.send(`User found: ${user.name}`);
  });
  
  const getUsers = asyncHandler(async (req, res) => {
    // code
  });
  
  const createUser = asyncHandler(async (req, res) => {
    // code
  });
  
  module.exports = { getUserById, getUsers, createUser };