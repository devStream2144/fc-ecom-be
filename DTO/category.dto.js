class GetCategoryDTO {
  category;
  subcategory;
  categoryId;

  constructor(data) {
    this.category = data.category;
    this.subcategory = data.subcategory;
    this.categoryId = data.categoryId;
  }
}

class AddCategoryDTO {
  category;
  subcategory;
  categoryId;

  constructor(data) {
    this.category = data.category;
    this.subcategory = data.subcategory;
    this.categoryId = data.categoryId;
  }
}

module.exports = { GetCategoryDTO, AddCategoryDTO };
