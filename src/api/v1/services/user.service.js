module.exports = {
  getUserById: async (id) => {
    if (id == "1")
      return {
        name: "first",
        age: 18,
      };
    else
      return {
        name: "all",
      };
  },
};
