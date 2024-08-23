const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  cartItemId: {
    type: String,
    default: function () {
      return this._id.toString();
    },
  },
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = cartSchema;
