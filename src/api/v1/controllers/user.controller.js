const userService = require("../services/user.service");

module.exports = {
  index: async (req, res, next) => {
    res.json({
      message: "Index of user",
    });
  },
  getUserById: async (req, res, next) => {
    const { id } = req.params;

    if (!id) res.end("Not valid id");

    const user = await userService.getUserById(id);
    console.log(user);
    res.json({
      message: `Info of user id:${id}`,
      user,
    });
  },
};
