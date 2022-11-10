const userModel = require("../models/user.model");

module.exports = {
  getUserById: async (id) => {
    const user = await userModel.get(id);

    return user;
  },
  createUser: async (id, name, age) => {
    const user = await userModel.create(id, name, age);

    return user;
  },
  updateUser: async (id, name, age) => {
    const user = await userModel.update(id, name, age);

    return user;
  },
  deleteUser: async (id) => {
    const user = await userModel.delete(id);

    return user;
  },
};
