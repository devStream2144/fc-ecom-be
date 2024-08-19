class GetUserDTO {
  fullname = "";
  username = "";
  password = "";
  id = "";
  userProfile = {};

  // Constructor that takes an object with properties
  constructor(data, roles) {
    this.id = data._id || "";
    this.fullname = data.fullname || "";
    this.username = data.username || "";
    this.password = data.password || "";
    this.userProfile = data.userProfile[0] || {};
    const roleAuth = roles?.some(({ role }) =>
      process.env.ROLE_VISIBLITY.split(" ").includes(role)
    );
    if (roles?.length && roleAuth) {
      this.roles = data.roles || [];
    }
  }
  // Method to convert the instance to a plain object
  toObject() {
    return {
      id: this.id,
      fullname: this.fullname,
      username: this.username,
      password: this.password,
      roles: this.roles,
      userProfile: this.userProfile,
    };
  }
  // Static method to create instances from an array of data
  static fromArray(data = [], roleArr) {
    this.roles = roleArr;
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format, expected an array");
    }

    return data.map((item) => new GetUserDTO(item, roleArr));
  }
}

class AddUserDTO {
  fullname = "";
  username = "";
  password = "";
  roles = [];

  constructor(data) {
    this.fullname = data.fullname || "";
    this.username = data.username || "";
    this.password = data.password || "";
    this.roles = data.roles || [];
  }
}

module.exports = { GetUserDTO, AddUserDTO };
