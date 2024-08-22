const mongoose = require("mongoose");
const categorySchema = require("./category.schema");
const userSchema = require("./user.schema");
const profileSchema = require("./userprofile.schema");
const productSchema = require("./product.schema");
const productLikesSchema = require("./productLikes.schema");
const cartSchema = require("./cart.schema");

const Model = {
  Category: mongoose.model("categorys", categorySchema),
  User: mongoose.model("users", userSchema),
  UserProfile: mongoose.model("userprofile", profileSchema),
  Product: mongoose.model("product", productSchema),
  ProductLikes: mongoose.model("productLikes", productLikesSchema),
  CartSchema: mongoose.model("carts", cartSchema),
};

module.exports = Model;
