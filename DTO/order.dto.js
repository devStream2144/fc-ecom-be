class CreateOrderDTO {
  userId = "";
  total_amount = "";
  status = "";
  productId = "";

  constructor(data) {
    this.userId = data.userId;
    this.total_amount = data.total_amount;
    this.status = data.status;
    this.productId = data.productId;
  }
}

module.exports = {
  CreateOrderDTO,
};
