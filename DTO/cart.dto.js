class AddToCartDTO {
  userId = "";
  productId = "";
  isDeleted = false;

  constructor(data) {
    this.userId = data.userId || "";
    this.productId = data.productId || "";
    this.isDeleted = data.isDeleted || false;
  }
}

module.exports = {
  AddToCartDTO,
};
