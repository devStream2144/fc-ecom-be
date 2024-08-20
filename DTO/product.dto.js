class AddProductDTO {
  name = "";
  description = "";
  price = {
    origin: 0,
    discount: 0,
  };
  quantity = 0;
  color = "";
  size = 0;
  other = {
    liked: 0,
    disliked: 0,
  };
  buyed = 0;
  category = {};

  constructor(data) {
    this.name = data.name || "";
    this.description = data.description || "";
    this.price = data.price || "";
    this.quantity = data.quantity || "";
    this.color = data.color || "";
    this.size = data.size || "";
    this.buyed = data.buyed || "";
    this.other = data.other || "";
    this.category = data.category || "";
  }
}

class GetProductDTO {
  productId = "";
  name = "";
  description = "";
  price = {
    origin: 0,
    discount: 0,
  };
  quantity = 0;
  color = "";
  size = 0;
  other = {
    liked: 0,
    disliked: 0,
  };
  buyed = 0;
  category = {};
  likesAndDislikes = [];

  constructor(data, roles) {
    this.productId = data._id || "";
    this.name = data.name || "";
    this.description = data.description || "";
    this.price = data.price || "";
    this.quantity = data.quantity || "";
    this.color = data.color || "";
    this.size = data.size || "";
    this.buyed = data.buyed || "";
    this.other = data.other || "";
    this.category = data.category || "";
    this.likesAndDislikes = data.likesAndDislikes || [];
    const roleAuth = roles?.some(({ role }) =>
      process.env.ROLE_VISIBLITY.split(" ").includes(role)
    );
    if (roleAuth) {
    }
  }

  toObject() {
    return {
      productId: this.productId,
      name: this.name,
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      color: this.color,
      size: this.size,
      buyed: this.buyed,
      other: this.other,
      category: this.category,
      likesAndDislikes: this.likesAndDislikes,
    };
  }

  static fromArray(data = [], roleArr) {
    this.roles = roleArr;
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format, expected an array");
    }

    return data.map((item) => new GetProductDTO(item, roleArr));
  }
}

class GetProductLikesAndDislikesDTO {
  userId = "";
  productId = "";
  liked = 0;
  disliked = 0;
  isDeleted = false;

  constructor(data, roles) {
    this.userId = data.userId;
    this.productId = data.productId;
    this.liked = data.liked;
    this.disliked = data.disliked;
    this.isDeleted = data.isDeleted;
    const roleAuth = roles?.some(({ role }) =>
      process.env.ROLE_VISIBLITY.split(" ").includes(role)
    );
    if (roleAuth) {
    }
  }

  toObject() {
    return {
      userId: this.userId,
      productId: this.productId,
      liked: this.liked,
      disliked: this.disliked,
      isDeleted: this.isDeleted,
    };
  }

  static fromArray(data = [], roleArr) {
    this.roles = roleArr;
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format, expected an array");
    }

    return data.map((item) => new GetProductLikesAndDislikesDTO(item, roleArr));
  }
}

class AddProductLikesDTO {
  userId = "";
  productId = "";
  liked = 0;
  disliked = 0;
  isDeleted = false;

  constructor(data) {
    this.userId = data.userId || "";
    this.productId = data.productId || "";
    this.liked = data.liked || 0;
    this.disliked = data.disliked || 0;
    this.isDeleted = data.isDeleted || false;
  }
}

module.exports = {
  AddProductDTO,
  GetProductDTO,
  AddProductLikesDTO,
  GetProductLikesAndDislikesDTO,
};
