const CartService = require("../services/cart.service");

const CartController = {
  AddToCart: (req, res, next) => {
    const data = req.body;
    CartService.addToCart(data, next, (err, statusCode, data, message) => {
      res.status(statusCode).json({ err: err, data: data, message });
    });
  },
};

module.exports = CartController;
