const ProductsServices = require("../services/product.service");

const ProductController = {
  AddProduct: (req, res, next) => {
    const data = req.body;
    ProductsServices.addProduct(
      data,
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },
};

module.exports = ProductController;
