const ProductsService = require("../services/product.service");

const ProductController = {
  AddProduct: (req, res, next) => {
    const data = req.body;
    ProductsService.addProduct(data, next, (err, statusCode, data, message) => {
      res.status(statusCode).json({ err: err, data: data, message });
    });
  },

  GetProducts: (req, res, next) => {
    const data = req.roles;
    ProductsService.getProducts(
      data,
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  GetProductById: (req, res, next) => {
    const id = req.params.id;
    const roles = req.roles;
    ProductsService.getProductById(
      { id, roles },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  UpdateProduct: (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    ProductsService.updateProduct(
      { id, productUpdatedData: data },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  DeleteProduct: (req, res, next) => {
    const id = req.params.id;
    ProductsService.deleteProduct(
      { id },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },
};

module.exports = ProductController;
