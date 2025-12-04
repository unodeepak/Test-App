const route = require("express").Router();
const userController = require("../controller/userController");
const transactionController = require("../controller/transactionController");

route.post("/create-user", userController.userController);
route.get("/get-users", userController.getAllUsers);
route.get("/get-user-by-id/:id", userController.getUserById);
route.get("/get-user-by-email", userController.getUserByEmail);
route.delete("/delete-user-by-id/:id", userController.deleteUserById);
route.put("/update-by-user-id/:id", userController.updateByUserId);
route.put("/update-by-user-email", userController.updateByUserEmail);
route.get("/update-with-pagination", userController.getUsersWithPagination);

/* Transaction Routes */
route.post("/create-transaction", transactionController.createTransaction);
route.get("/get-transaction/:userId", transactionController.getTransactionByUserId);
route.get("/get-calculated-transaction/:userId", transactionController.calculateTransactionByUserId);
route.get("/get-total-transaction", transactionController.getTotalTransaction);

module.exports = route;
