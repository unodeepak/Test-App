const UserModel = require("../models/userModel");

exports.userController = async (req, res) => {
  try {
    /* Insert the data in database. Just like in SQL: INSERT INTO Table Query */
    const user = await UserModel.create(req.body);

    return res.status(200).json({
      data: user,
      msg: "User created successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
};

/* Find all data from database */
exports.getAllUsers = async (req, res) => {
  try {
    /* It behave like SELECT Query in SQL. Like Select *From Table */
    const data = await UserModel.find({});
    return res.status(200).json({
      data,
      msg: "Data fetched successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
};

/* Find data based on id */
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    /* Behave like SELECT Query with WHERE Condition */
    const data = await UserModel.findById(id);
    return res.status(200).json({
      data,
      msg: "Data fetched successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
};

/* Find data based on email */
exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;

    /* Behave like SELECT Query with WHERE Condition */
    const data = await UserModel.findOne({ email });
    return res.status(200).json({
      data,
      msg: "Data fetched successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
};

/* Delete the data from database with the help of id */
exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    /* Behave like DELETE Query with WHERE Condition */
    const data = await UserModel.findByIdAndDelete(id);
    return res.status(200).json({
      data,
      msg: "Data deleted successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
};

/* Update the data with the help of id */
exports.updateByUserId = async (req, res) => {
  try {
    const { id } = req.params;

    /* Behave like UPDATE Query with WHERE Condition */
    const data = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json({
      data,
      msg: "Data updated successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
};

exports.updateByUserEmail = async (req, res) => {
  try {
    const { email } = req.body;

    /* Behave like UPDATE Query with WHERE Condition */
    const data = await UserModel.findOneAndUpdate({ email }, req.body, {
      new: true,
    });
    return res.status(200).json({
      data,
      msg: "Data updated successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
};

/* Find the data from database with the help of pagination */
exports.getUsersWithPagination = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const data = await UserModel.find()
      .skip(limit * (page - 1))
      .limit(limit);
    return res.status(200).json({
      data,
      msg: "Data fetched successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
};
