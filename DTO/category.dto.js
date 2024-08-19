class GetCategoryDTO {
  category;
  subcategory;

  constructor(data) {
    this.category = data.category;
    this.subcategory = data.subcategory;
  }
}

class AddCategoryDTO {
  category;
  subcategory;

  constructor(data) {
    this.category = data.category;
    this.subcategory = data.subcategory;
  }
}

module.exports = { GetCategoryDTO, AddCategoryDTO };
