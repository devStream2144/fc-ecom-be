const mongoose = require("mongoose");
const categorySchema = require("../models/category.schema");

const productSchema = mongoose.Schema({
  productId: {
    type: String,
    default: function () {
      return this._id.toString();
    },
  },
  productImages: {
    type: Array,
    required: true,
    default: [],
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    original: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  quantity: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  other: {
    liked: {
      type: Number,
      required: true,
    },
    disliked: {
      type: Number,
      required: true,
    },
  },
  buyed: {
    type: Number,
    required: true,
  },
  category: categorySchema,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = productSchema;
