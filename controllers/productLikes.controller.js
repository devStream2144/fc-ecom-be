const productLikesService = require("../services/productLikes.service");

const ProductLikesController = {
  DoLikeOrDisLike: (req, res, next) => {
    const data = req.body;
    productLikesService.doLikeOrDisLike(
      data,
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  GetProductLikesAndDislikedOfProduct: (req, res, next) => {
    const roles = req.roles;
    const id = req.params.productId;
    productLikesService.getProductLikesAndDislikesOfProduct(
      { roles, id },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },
};

module.exports = ProductLikesController;
