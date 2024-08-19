const Model = require("../models/models");
const { AddProductDTO } = require("../DTO/product.dto");

const ProductsServices = () => {
  const addProduct = async (data, next, cb) => {
    try {
      const product = await new Model.Product(new AddProductDTO(data));
      if (product) {
        const result = await product.save();
        if (result) {
          cb(false, 200, result, "Product added successfully!");
        } else {
          cb(true, 400, [], "Product added failed!");
        }
      }
    } catch (err) {
      console.log("ERROR : ", err);
      next(err);
    }
  };

  return {
    addProduct,
  };
};

module.exports = ProductsServices();
