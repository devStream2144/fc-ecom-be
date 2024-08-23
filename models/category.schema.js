const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categoryId: {
    type: String,
    default: function () {
      return this._id.toString();
    },
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: [
    {
      name: {
        type: String,
        required: false,
      },
    },
  ],
});

module.exports = categorySchema;
