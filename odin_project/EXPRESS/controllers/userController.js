// user controller file - controllers/userController.js

async function someDBQueryToGetUser(userId) {
    return {id: userId, name: 'bob'}
}

const getUserById = async (req, res) => {
    const userId = req.params.id;
  
    const user = await someDBQueryToGetUser(userId);
  
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
  
    res.send(`User found: ${user.name}`);
  };

  module.exports = {
    getUserById
  }