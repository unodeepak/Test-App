const UserModel = require("../models/userModel");

exports.userController = async (req, res) => {
  try {
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
