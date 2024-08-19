const express = require("express");
const app = express();
const categoryRoute = require("../routers/category.route");
const userRoute = require("../routers/user.route");
const userProfileRoute = require("../routers/userProfile.route");
const productRoute = require("../routers/product.route");

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
];

module.exports = routers;
