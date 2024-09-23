const Model = require("../models/models");
const { AddToCartDTO, GetCartDTO } = require("../DTO/cart.dto");
const query = require("../DB/queries/index");

const CartService = () => {
  const addToCart = async (data, next, cb) => {
    const { body } = data;
    try {
      const cart = await new Model.CartSchema(new AddToCartDTO(body));
      if (cart) {
        const result = await cart.save();
        if (result) {
          cb(false, 200, result, `Item added to cart!`);
        } else {
          cb(true, 400, [], "Item failed to add in the cart!");
        }
      }
    } catch (err) {
      console.log("ERROR : ", err);
      next(err);
    }
  };

  const getCartItemByUser = async (data, next, cb) => {
    const { id } = data;
    try {
      const cart = await Model.CartSchema.aggregate([
        {
          $match: { userId: id }, // Exclude deleted records
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "productId",
            as: "productDetails",
          },
        },
      ]);
      const cartArr = GetCartDTO.fromArray(cart);
      const cartData = cartArr.map((cartDto) => cartDto.toObject());
      if (cart) {
        cb(false, 200, cartData, `Cart item get successfully!`);
      }
    } catch (err) {
      console.log("ERROR : ", err);
      next(err);
    }
  };

  const removeItemFromCart = async (data, next, cb) => {
    const { id } = data;
    try {
      const cart = await Model.CartSchema.deleteOne({ _id: id });
      if (cart) {
        cb(false, 200, cart, `Cart item id deleted!`);
      }
    } catch (err) {
      console.log("ERROR : ", err);
      next(err);
    }
  };

  return {
    addToCart,
    getCartItemByUser,
    removeItemFromCart,
  };
};

module.exports = CartService();
