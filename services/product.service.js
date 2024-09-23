const Model = require("../models/models");
const {
  GetProductDTO,
  AddProductDTO,
  GetUploadedProductImageDTO,
} = require("../DTO/product.dto");
const query = require("../DB/queries");

const ProductsService = () => {
  const addProduct = async (data, next, cb) => {
    const { body } = data;
    try {
      const product = await new Model.Product(new AddProductDTO(body));
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
      const { id, body } = data;
      const product = await Model.Product.updateOne(
        query.productQuery("UpdateProduct", new AddProductDTO(body), id)
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

  const uploadProductImages = async (data, next, cb) => {
    const { body, id } = data;
    try {
      const product = await Model.Product.findOne({ _id: id });
      if (!product) {
        cb(false, 404, [], "Product not found!");
        return;
      }
      const productImages = GetUploadedProductImageDTO.fromArray(body, []);
      const finalData = productImages.map((productDTO) =>
        productDTO.toObject()
      );
      console.log("finalData image data : ", finalData);

      const productImage = [...product.productImages, ...finalData];

      const updateResult = await Model.Product.updateOne(
        { _id: id },
        {
          $set: { productImages: productImage },
          $currentDate: { lastUpdated: true },
        }
      );

      if (updateResult.modifiedCount > 0) {
        cb(false, 200, updateResult, "Product images uploaded successfully!");
      } else {
        cb(false, 200, [], "Product images upload failed!");
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
    uploadProductImages,
  };
};

module.exports = ProductsService();
