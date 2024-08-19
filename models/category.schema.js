const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
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
