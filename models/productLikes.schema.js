const mongoose = require("mongoose");

const productLikesSchema = mongoose.Schema({
  productLikesId: {
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
  liked: {
    type: Number,
    required: true,
    default: 0,
  },
  disliked: {
    type: Number,
    required: true,
    default: 0,
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

module.exports = productLikesSchema;
