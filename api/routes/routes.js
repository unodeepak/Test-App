const route = require("express").Router();
const userController = require("../controller/userController");

route.post("/create-user", userController.userController);
route.get("/get-users", userController.getAllUsers);
route.get("/get-user-by-id/:id", userController.getUserById);
route.get("/get-user-by-email", userController.getUserByEmail);
route.delete("/delete-user-by-id/:id", userController.deleteUserById);
route.put("/update-by-user-id/:id", userController.updateByUserId);
route.put("/update-by-user-email", userController.updateByUserEmail);
route.get("/update-with-pagination", userController.getUsersWithPagination);


module.exports = route;
