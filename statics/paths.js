const LikesAndDislikespaths = [
  {
    controller: "DoLikeOrDisLike",
    service: "doLikeOrDisLike",
    method: "post",
    path: "/",
    auth: false,
    valid: true,
  },
  {
    controller: "GetProductLikesAndDislikedOfProduct",
    service: "getProductLikesAndDislikesOfProduct",
    method: "get",
    path: "/:productId",
    authenticator: false,
    validator: false,
  },
];

const UserPaths = [
  {
    controller: "AddUser",
    service: "addUser",
    method: "post",
    path: "/",
    auth: true,
    valid: true,
  },
  {
    controller: "GetUsers",
    service: "getUsers",
    method: "get",
    path: "/",
    authenticator: false,
    validator: false,
  },
  {
    controller: "UserLogin",
    service: "userLogin",
    method: "get",
    path: "/login",
    authenticator: false,
    validator: false,
  },
  {
    controller: "GetUserById",
    service: "getUserById",
    method: "get",
    path: "/:id",
    authenticator: true,
    validator: false,
  },
  {
    controller: "UpdateUser",
    service: "updateUser",
    method: "patch",
    path: "/:id",
    authenticator: false,
    validator: false,
  },
  {
    controller: "DeletedUser",
    service: "deletedUser",
    method: "delete",
    path: "/:id",
    authenticator: true,
    validator: false,
  },
  {
    controller: "AddNewRoles",
    service: "addNewRoles",
    method: "post",
    path: "/roles/:id",
    authenticator: true,
    validator: false,
  },
  {
    controller: "DeleteRoles",
    service: "deleteRoles",
    method: "delete",
    path: "/roles/:id",
    authenticator: true,
    validator: false,
  },
];

userProfilepath = [
  {
    controller: "AddUserProfile",
    service: "addUserProfile",
    method: "post",
    path: "/",
    authenticator: false,
    validator: true,
  },
  {
    controller: "UpdateUserProfile",
    service: "updateUserProfile",
    method: "patch",
    path: "/:id",
    authenticator: false,
    validator: true,
  },
];

const productPaths = [
  {
    controller: "AddProduct",
    service: "addProduct",
    method: "post",
    path: "/",
    authenticator: false,
    validator: true,
  },
  {
    controller: "GetProducts",
    service: "getProducts",
    method: "get",
    path: "/",
    authenticator: true,
    validator: false,
  },
  {
    controller: "GetProductById",
    service: "getProductById",
    method: "get",
    path: "/:id",
    authenticator: true,
    validator: false,
  },
  {
    controller: "UpdateProduct",
    service: "updateProduct",
    method: "patch",
    path: "/:id",
    authenticator: true,
    validator: false,
  },
  {
    controller: "DeleteProduct",
    service: "deleteProduct",
    method: "delete",
    path: "/:id",
    authenticator: true,
    validator: false,
  },
];

module.exports = {
  LikesAndDislikespaths,
  UserPaths,
  userProfilepath,
  productPaths,
};
