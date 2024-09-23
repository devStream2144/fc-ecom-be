const Model = require("../models/models");
const {
  AddProductLikesDTO,
  GetProductLikesAndDislikesDTO,
} = require("../DTO/product.dto");
const query = require("../DB/queries/index");

const ProductLikesService = () => {
  const doLikeOrDisLike = async (data, next, cb) => {
    const { body } = data;
    try {
      const product = await new Model.ProductLikes(
        new AddProductLikesDTO(body)
      );
      if (product) {
        const result = await product.save();
        if (result) {
          cb(
            false,
            200,
            result,
            `User ${body.liked ? "liked" : "disliked"} Product!`
          );
        } else {
          cb(true, 400, [], "Like added failed!");
        }
      }
    } catch (err) {
      console.log("ERROR : ", err);
      next(err);
    }
  };

  const getProductLikesAndDislikesOfProduct = async (data, next, cb) => {
    try {
      const { roles, id } = data;

      const likesAndDislikes = await Model.ProductLikes.aggregate(
        query.productQuery(global.GetProductLikesAndDislikesOfProduct, {}, id)
      );
      console.log("likesAndDislikes : ", likesAndDislikes[0]);

      if (likesAndDislikes.length) {
        // const productLikedAndDislikedData =
        //   GetProductLikesAndDislikesDTO.fromArray(likesAndDislikes, roles);
        // const finalData = productLikedAndDislikedData.map(
        //   (productLikedAndDislikedDTO) => productLikedAndDislikedDTO.toObject()
        // );
        cb(false, 200, likesAndDislikes[0], "LIkes fetched successfully!");
      } else {
        cb(false, 200, [], "Likes not availible!");
      }
    } catch (err) {
      next(err);
    }
  };

  const removeProductLikeOrDislike = async (data, next, cb) => {
    try {
      const { body } = data;
      const product = await Model.ProductLikes.deleteOne(body);
      if (product) {
        cb(false, 200, product, "Product lieks deleted successfully!");
      } else {
        cb(true, 204, [], "Product likes not deleted!");
      }
    } catch (err) {
      next(err);
    }
  };

  return {
    doLikeOrDisLike,
    getProductLikesAndDislikesOfProduct,
    removeProductLikeOrDislike,
  };
};

module.exports = ProductLikesService();
