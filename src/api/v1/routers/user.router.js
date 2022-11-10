const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.use("/users", userController.index);
router
  .route("/user")
  .get(userController.getUserById)
  .post(userController.createUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
