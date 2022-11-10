const userService = require("../services/user.service");

module.exports = {
  index: async (req, res, next) => {
    res.json({
      message: "Index of user",
    });
  },
  getUserById: async (req, res, next) => {
    const { id } = req.body;

    if (!id) res.end("Not valid id");

    try {
      const user = await userService.getUserById(id);
      console.log(user);
      res.json({
        message: `Info of user id:${id}`,
        user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (req, res, next) => {
    const { id, name, age } = req.body;

    if (!id || !name || !age) res.end("Not enough information");

    try {
      const user = await userService.createUser(id, name, age);

      return res.json({
        message: `Create user id:${id}`,
        user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  updateUser: async (req, res, next) => {
    const { id, name, age } = req.body;

    if (!id || !name || !age) res.end("Not enough information");

    try {
      const user = await userService.updateUser(id, name, age);

      return res.json({
        message: `Update user id:${id}`,
        user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteUser: async (req, res, next) => {
    const { id } = req.body;

    if (!id) res.end("Not enough information");

    try {
      const user = await userService.deleteUser(id);

      return res.json({
        message: `Delete user id:${id}`,
        user,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
