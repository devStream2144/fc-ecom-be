const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  userProfileId: {
    type: String,
    default: function () {
      return this._id.toString();
    },
  },
  userId: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  phone: {
    primary: {
      type: Number,
      required: true,
    },
    alternate: {
      type: Number,
      required: false,
    },
  },
  gmail: {
    type: String,
    required: true,
  },
  address: {
    line1: {
      required: true,
      type: String,
    },
    line2: {
      required: false,
      type: String,
    },
    landmark: {
      required: false,
      type: String,
    },
    city: {
      required: true,
      type: String,
    },
    state: {
      required: true,
      type: String,
    },
    zip: {
      required: true,
      type: Number,
    },
    country: {
      required: true,
      type: String,
    },
  },
  sizes: {
    foot: {
      type: Number,
      required: false,
    },
    legs: {
      type: Number,
      required: false,
    },
    body: {
      type: Number,
      required: false,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = profileSchema;
