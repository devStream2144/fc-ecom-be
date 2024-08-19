class AddUserProfileDTO {
  userId = "";
  picture = "";
  phone = {
    primary: 0,
    alternate: 0,
  };
  gmail = "";
  address = {
    line1: "",
    line2: "",
    landmark: "",
    city: "",
    state: "",
    zip: 0,
    country: "",
  };
  sizes = {
    foot: 0,
    legs: 0,
    body: 0,
  };

  constructor(data) {
    this.userId = data.userId;
    this.picture = data.picture || "";
    this.phone = data.phone || 0;
    this.gmail = data.gmail || "";
    this.address = data.address;
    this.sizes = data.sizes;
  }
}

module.exports = { AddUserProfileDTO };
