class AddProductDTO {
  name = "";
  price = {
    origin: 0,
    discount: 0,
  };
  quantity = 0;
  color = "";
  size = 0;
  category = {};

  constructor(data) {
    this.name = data.name || "";
    this.price = data.price || "";
    this.quantity = data.quantity || "";
    this.color = data.color || "";
    this.size = data.size || "";
    this.category = data.category || "";
  }
}

module.exports = { AddProductDTO };
