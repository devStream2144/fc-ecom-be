const express = require("express");
const app = express();
const categoryRoute = require("../routers/category.route");
const userRoute = require("../routers/user.route");
const userProfileRoute = require("../routers/userProfile.route");
const productRoute = require("../routers/product.route");
const productLikesRoute = require("../routers/productLikes.route");
const cartRoute = require("../routers/cart.route");

const routers = [
  {
    path: "/category",
    route: categoryRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/user-profile",
    route: userProfileRoute,
  },
  {
    path: "/product",
    route: productRoute,
  },
  {
    path: "/product-likes",
    route: productLikesRoute,
  },
  {
    path: "/cart",
    route: cartRoute,
  },
];

module.exports = routers;
