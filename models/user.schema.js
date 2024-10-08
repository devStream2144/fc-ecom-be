const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    default: function () {
      return this._id.toString();
    },
  },
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      role: {
        type: String,
        required: false,
      },
      id: {
        type: String,
        required: false,
      },
    },
  ],
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = userSchema;
