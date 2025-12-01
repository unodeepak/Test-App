const route = require("express").Router();
const userController = require("../controller/userController");

route.post("/create-user", userController.userController);

module.exports = route;
