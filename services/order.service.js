const Model = require("../models/models");
const { CreateOrderDTO } = require("../DTO/order.dto");
const OrderServices = () => {
  const createOrder = async (data, next, cb) => {
    const { body } = data;
    try {
      const isOrderCreated = await new Model.OrderSchema(
        new CreateOrderDTO(body)
      );
      if (isOrderCreated) {
        const result = await isOrderCreated.save();
        if (result) {
          cb(false, 200, result, `Order created successfully!`);
        } else {
          cb(true, 400, [], "Order creat failed!");
        }
      }
    } catch (err) {
      console.log("ERROR : ", err);
      next(err);
    }
  };

  const getOrders = async (data, next, cb) => {
    try {
      const orders = await Model.OrderSchema.find();
      const messages = orders.length
        ? `${orders.length} Orders get successfully!`
        : "Orders get failed!";
      cb(false, 200, orders, messages);
    } catch (err) {
      console.log("ERROR : ", err);
      next(err);
    }
  };

  return {
    createOrder,
    getOrders,
  };
};

module.exports = OrderServices();
