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
    auth: false,
    valid: false,
  },
  {
    controller: "RemoveProductLikeOrDislike",
    service: "removeProductLikeOrDislike",
    method: "delete",
    path: "/",
    auth: false,
    valid: false,
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
    auth: true,
    valid: false,
  },
  {
    controller: "UserLogin",
    service: "userLogin",
    method: "get",
    path: "/login",
    auth: false,
    valid: false,
  },
  {
    controller: "GetUserById",
    service: "getUserById",
    method: "get",
    path: "/:id",
    auth: true,
    valid: false,
  },
  {
    controller: "UpdateUser",
    service: "updateUser",
    method: "patch",
    path: "/:id",
    auth: true,
    valid: true,
  },
  {
    controller: "DeletedUser",
    service: "deletedUser",
    method: "delete",
    path: "/:id",
    auth: true,
    valid: false,
  },
  {
    controller: "AddNewRoles",
    service: "addNewRoles",
    method: "post",
    path: "/roles/:id",
    auth: true,
    valid: false,
  },
  {
    controller: "DeleteRoles",
    service: "deleteRoles",
    method: "delete",
    path: "/roles/:id",
    auth: true,
    valid: false,
  },
];

UserProfilepath = [
  {
    controller: "AddUserProfile",
    service: "addUserProfile",
    method: "post",
    path: "/",
    auth: false,
    valid: true,
  },
  {
    controller: "UpdateUserProfile",
    service: "updateUserProfile",
    method: "patch",
    path: "/:id",
    auth: false,
    valid: true,
  },
];

const ProductPaths = [
  {
    controller: "AddProduct",
    service: "addProduct",
    method: "post",
    path: "/",
    auth: false,
    valid: true,
  },
  {
    controller: "GetProducts",
    service: "getProducts",
    method: "get",
    path: "/",
    auth: true,
    valid: false,
  },
  {
    controller: "GetProductById",
    service: "getProductById",
    method: "get",
    path: "/:id",
    auth: true,
    valid: false,
  },
  {
    controller: "UpdateProduct",
    service: "updateProduct",
    method: "patch",
    path: "/:id",
    auth: true,
    valid: false,
  },
  {
    controller: "DeleteProduct",
    service: "deleteProduct",
    method: "delete",
    path: "/:id",
    auth: true,
    valid: false,
  },
  {
    controller: "UploadProductImages",
    service: "uploadProductImages",
    method: "patch",
    path: "/upload-images/:id",
    auth: false,
    valid: false,
  },
];

const CategoriesPaths = [
  {
    controller: "AddCategory",
    service: "addCategory",
    method: "post",
    path: "/",
    auth: true,
    valid: true,
  },
  {
    controller: "GetCategories",
    service: "getCategories",
    method: "get",
    path: "/",
    auth: true,
    valid: false,
  },
  {
    controller: "GetCategoryById",
    service: "getCategoryById",
    method: "get",
    path: "/:id",
    auth: true,
    valid: false,
  },
  {
    controller: "UpdateCategory",
    service: "updateCategory",
    method: "patch",
    path: "/:id",
    auth: true,
    valid: true,
  },
  {
    controller: "DeletedCategory",
    service: "deletedCategory",
    method: "delete",
    path: "/:id",
    auth: true,
    valid: false,
  },
];

const CartsPaths = [
  {
    controller: "AddToCart",
    service: "addToCart",
    method: "post",
    path: "/",
    auth: true,
    valid: true,
  },
  {
    controller: "GetCartItemByUser",
    service: "getCartItemByUser",
    method: "get",
    path: "/:id",
    auth: true,
    valid: false,
  },
  {
    controller: "RemoveItemFromCart",
    service: "removeItemFromCart",
    method: "delete",
    path: "/:id",
    auth: true,
    valid: false,
  },
];

const OrderPaths = [
  {
    controller: "CreateOrder",
    service: "createOrder",
    method: "post",
    path: "/",
    auth: true,
    valid: false,
  },
  {
    controller: "GetOrders",
    service: "getOrders",
    method: "get",
    path: "/",
    auth: true,
    valid: false,
  },
];

module.exports = {
  LikesAndDislikespaths,
  UserPaths,
  UserProfilepath,
  ProductPaths,
  CategoriesPaths,
  CartsPaths,
  OrderPaths,
};
