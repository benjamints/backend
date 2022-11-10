const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.use("/user", userController.index);
router.use("/users/:id", userController.getUserById);

module.exports = router;
