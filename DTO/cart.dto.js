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

class GetCartDTO {
  cartItemId = "";
  userId = "";
  productId = "";
  isDeleted = false;
  productDetails = {};

  constructor(data, roles) {
    this.cartItemId = data._id || "";
    this.userId = data.userId || "";
    this.productId = data.productId || "";
    this.productDetails = data.productDetails[0] || {};
    this.isDeleted = data.isDeleted || false;
    const roleAuth = roles?.some(({ role }) =>
      process.env.ROLE_VISIBLITY.split(" ").includes(role)
    );
    if (roleAuth) {
    }
  }

  toObject() {
    return {
      cartItemId: this.cartItemId,
      userId: this.userId,
      productId: this.productId,
      isDeleted: this.isDeleted,
      productDetails: this.productDetails,
    };
  }

  static fromArray(data = [], roleArr) {
    this.roles = roleArr;
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format, expected an array");
    }

    return data.map((item) => new GetCartDTO(item, roleArr));
  }
}

module.exports = {
  AddToCartDTO,
  GetCartDTO,
};
