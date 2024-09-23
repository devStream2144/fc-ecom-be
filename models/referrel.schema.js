const mongoose = require("mongoose");

const referrelSchema = mongoose.Schema({
  referralId: {
    type: String,
    default: function () {
      return this._id.toString();
    },
  },
  referredBy: {
    type: String,
    required: true,
  },
  referToId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  isUserPurchased: {
    type: Boolean,
    required: false,
  },
  purchasedDetails: {
    purchasedAt: {
      type: String,
      required: false,
    },
    purchasedAmount: {
      type: Number,
      required: false,
    },
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

module.exports = referrelSchema;
