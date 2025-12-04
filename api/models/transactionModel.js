const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "success", "failed"],
    },
    amount: {
      type: Number,
      required: true,
      default: 0,
    },
    transactionType: {
      type: String,
      required: true,
      enum: ["deposit", "withdrawal"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("transactions", transactionSchema, 'transactions');
