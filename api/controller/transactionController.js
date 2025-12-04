const mongoose = require("mongoose");
const TransactionModel = require("../models/transactionModel");
const ObjectId = mongoose.Types.ObjectId;

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await TransactionModel.create(req.body);
    return res.status(200).json({
      data: transaction,
      msg: "Transaction created successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
};

exports.getTransactionByUserId = async (req, res) => {
  try {
    const data = await TransactionModel.find({ userId: req.params.userId });

    if (!data?.length) {
      return res.status(400).json({
        msg: "Data not found",
        success: false,
      });
    }
    return res.status(200).json({
      data,
      msg: "Data fetched successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
      success: false,
    });
  }
};

exports.calculateTransactionByUserId = async (req, res) => {
  try {
    const totalAmount = await TransactionModel.aggregate([
      /* Behave like where in sql */
      {
        $match: {
          userId: new ObjectId(req.params.userId),
        },
      },
      {
        /* Behave like group by in sql */
        $group: {
          _id: {
            status: "$status",
            transactionType: "$transactionType",
          },

          /* Behave like sum in sql */
          totalAmount: {
            $sum: "$amount",
          },
        },
      },
    ]);

    return res.status(200).json({
      data: totalAmount,
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

exports.getTotalTransaction = async (req, res) => {
  try {
    const totalAmount = await TransactionModel.aggregate([
      /* group by just like in SQL */
      {
        $group: {
          _id: '$transactionType',
          totalAmount: {
            $sum: "$amount",
          },
        },
      },
      {
        $project: {
          _id: 0,
          transactionType: '$_id',
          totalAmount: 1
        }
      }
    ])
    return res.status(200).json({
      data: totalAmount,
      msg: "Data fetched successfully",
      success: true
    })
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: err?.message ?? "Something went wrong",
    });
  }
}