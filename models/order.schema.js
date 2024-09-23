const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: false,
  },
  order_date: { type: Date, default: Date.now },
  total_amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled", "Shipped"],
    default: "Pending",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

orderSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

module.exports = orderSchema;
