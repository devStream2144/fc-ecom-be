const Model = require("../models/models");
const { AddToCartDTO } = require("../DTO/cart.dto");
const query = require("../DB/queries/index");

const CartService = () => {
  const addToCart = async (data, next, cb) => {
    try {
      const cart = await new Model.CartSchema(new AddToCartDTO(data));
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

  return {
    addToCart,
  };
};

module.exports = CartService();
