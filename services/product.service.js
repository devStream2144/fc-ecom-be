const Model = require("../models/models");
const { GetProductDTO, AddProductDTO } = require("../DTO/product.dto");
const query = require("../DB/queries");

const ProductsService = () => {
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

  const getProducts = async (data, next, cb) => {
    console.log("Get products called!");

    try {
      const roles = data;
      const products = await Model.Product.aggregate(
        query.productQuery("GetProducts", {}, null)
      );
      if (products.length) {
        // const productsData = GetProductDTO.fromArray(products, roles);
        // const finalData = productsData.map((productDTO) =>
        //   productDTO.toObject()
        // );
        cb(false, 200, products, "All product fetched successfully!");
      } else {
        cb(false, 200, [], "Products not availible!");
      }
    } catch (err) {
      next(err);
    }
  };

  const getProductById = async (data, next, cb) => {
    try {
      const { id, roles } = data;
      const product = await Model.Product.findById(id);
      if (product) {
        cb(
          false,
          200,
          new GetProductDTO(product, roles),
          "Product fetched successfully!"
        );
      } else {
        cb(false, 200, [], "Product not availible!");
      }
    } catch (err) {
      next(err);
    }
  };

  const updateProduct = async (data, next, cb) => {
    try {
      const { id, productUpdatedData } = data;
      const product = await Model.Product.updateOne(
        query.productQuery(
          "UpdateProduct",
          new AddProductDTO(productUpdatedData),
          id
        )
      );
      if (product) {
        cb(false, 200, product, "Product updated successfully!");
      } else {
        cb(true, 204, [], "Product not updated!");
      }
    } catch (err) {
      next(err);
    }
  };

  const deleteProduct = async (data, next, cb) => {
    try {
      const { id } = data;
      const product = await Model.Product.deleteOne({ _id: id });
      if (product) {
        cb(false, 200, product, "Product deleted successfully!");
      } else {
        cb(true, 204, [], "Product not deleted!");
      }
    } catch (err) {
      next(err);
    }
  };

  return {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
  };
};

module.exports = ProductsService();
